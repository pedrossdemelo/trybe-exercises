from datetime import datetime
from platform import java_ver
import sys
from abc import abstractclassmethod, abstractmethod, abstractproperty, abstractstaticmethod


class TV:
    def __init__(self, size):
        self.__size = size
        self.__channel = 50
        self.__volume = 1
        self.__on = False

    def increase_volume(self):
        if self.__volume < 100:
            self.__volume += 1
            print(f"Volume is now at {self.__volume}")

    def decrease_volume(self):
        if self.__volume > 1:
            self.__volume -= 1
            print(f"Volume is now at {self.__volume}")

    def change_channel(self, channel):
        if type(channel) is not int or channel < 1 or channel > 99:
            raise ValueError("Channel must be an integer between 1 and 99")
        self.__on = True
        self.__channel = channel
        print(f"Channel is now at {self.__channel}")

    def toggle_power(self):
        if self.__on:
            self.__on = False
            print("TV is now off")
        else:
            self.__on = True
            print("TV is now on")


class Statistics:
    data = [9243, 234923, 92, 9234, 91234,
            4756, 234, 4358, 12, 324, 8439, 2348]

    @classmethod
    @property
    def mean(cls):
        return sum(cls.data) / len(cls.data)

    @classmethod
    @property
    def median(cls):
        cls.data.sort()
        if len(cls.data) % 2 == 0:
            return (cls.data[len(cls.data) // 2] + cls.data[(len(cls.data) // 2) - 1]) / 2
        else:
            return cls.data[len(cls.data) // 2]

    @classmethod
    @property
    def mode(cls):
        mode_dict = {}
        for item in cls.data:
            if item in mode_dict:
                mode_dict[item] += 1
            else:
                mode_dict[item] = 1
        return max(mode_dict, key=mode_dict.get)


class Shape:
    @abstractproperty
    def area(self):
        raise NotImplementedError

    @abstractproperty
    def perimeter(self):
        raise NotImplementedError


class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    @property
    def area(self):
        return self.width * self.height

    @property
    def perimeter(self):
        return (self.width + self.height) * 2


class Square(Shape):
    def __init__(self, side):
        self.side = side

    @property
    def area(self):
        return self.side ** 2

    @property
    def perimeter(self):
        return self.side * 4


class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    @property
    def area(self):
        return self.radius ** 2 * 3.14

    @property
    def perimeter(self):
        return self.radius * 2 * 3.14


class Log_Manipulator:
    @abstractstaticmethod
    def log():
        raise NotImplementedError


class Log_File(Log_Manipulator):
    @staticmethod
    def log(message, path="logs.txt"):
        original_stdout = sys.stdout
        with open(path, 'a') as file:
            sys.stdout = file
            print(message)
            sys.stdout = original_stdout


class Log_Console(Log_Manipulator):
    @staticmethod
    def log(message):
        print(message)


class Log:
    __manipulators = [Log_Console, Log_File]

    @classmethod
    def append_manipulator(cls, manipulator):
        cls.__manipulators.append(manipulator)

    @classmethod
    def __log(cls, message):
        for manipulator in cls.__manipulators:
            manipulator.log(message)

    @classmethod
    def __format(cls, severity, message):
        d = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
        return f"[{severity} - {d}]: {message}"

    @classmethod
    def info(cls, message):
        cls.__log(cls.__format("INFO", message))

    @classmethod
    def alert(cls, message):
        cls.__log(cls.__format("ALERT", message))

    @classmethod
    def error(cls, message):
        cls.__log(cls.__format("ERROR", message))

    @classmethod
    def debug(cls, message):
        cls.__log(cls.__format("DEBUG", message))


# Log.debug("This is a debug message")


class Guest:
    def __init__(self, name, cpf):
        self.name = name
        self.cpf = cpf


class Room:
    def __init__(self, number, floor, max_guests, price):
        self.number = number
        self.floor = floor
        self.max_guests = max_guests
        self.price = price
        self.is_booked = False

    def __str__(self):
        return f"Room {self.number} - {self.floor} floor - {self.max_guests} guests - R${self.price}"

    def __repr__(self):
        return f"Room {self.number} - floor {self.floor} - {self.max_guests} guests - R${self.price}"


class Reservation:
    def __init__(self, guest, room):
        self.guest = guest
        self.room = room

    def __repr__(self):
        return f"{self.guest.name} booked room {self.room.number}"


class Hotel:
    def __init__(self, rooms=[], reservations=[]):
        self.rooms = rooms
        self.reservations = reservations

    def check_in(self, guests):
        guest_amount = len(guests)
        for room in self.rooms:
            if room.is_booked is False and guest_amount <= room.max_guests:
                room.is_booked = True
                for guest in guests:
                    self.reservations.append(Reservation(guest, room))
                return None
        raise IndexError("No rooms available for the guests")

    def check_out(self, room):
        self.reservations = filter(
            lambda reservation: reservation.room.number != room.number, self.reservations)
        room.is_booked = False
        self.rooms = map(
            lambda other_room: other_room if other_room.number != room.number else room, self.rooms)

    @property
    def available_rooms(self):
        available_rooms = list(
            filter(lambda room: room.is_booked is False, self.rooms))
        return available_rooms


rooms = [Room(1, 1, 2, 100), Room(2, 1, 2, 100), Room(
    3, 1, 2, 100), Room(4, 1, 2, 100), Room(5, 1, 2, 100)]
guests = [Guest("John", "12345678901"), Guest("Mary", "12345678902")]
hotel = Hotel(rooms)
print(hotel.available_rooms)
hotel.check_in(guests)
print(hotel.available_rooms)
print(hotel.reservations)
