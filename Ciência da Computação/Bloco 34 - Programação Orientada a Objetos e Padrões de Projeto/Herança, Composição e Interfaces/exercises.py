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


Log.debug("This is a debug message")
