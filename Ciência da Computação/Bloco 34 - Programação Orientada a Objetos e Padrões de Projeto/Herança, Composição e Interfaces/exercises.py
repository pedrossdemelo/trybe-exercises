class TV:
    def __init__(self, size):
        self.size = size
        self.channel = 50
        self.volume = 1
        self.on = False

    def increase_volume(self):
        if self.volume < 100:
            self.volume += 1
            print(f"Volume is now at {self.volume}")

    def decrease_volume(self):
        if self.volume > 1:
            self.volume -= 1
            print(f"Volume is now at {self.volume}")

    def change_channel(self, channel):
        if channel is not int or channel < 1 or channel > 99:
            raise ValueError("Channel must be an integer between 1 and 99")
        self.on = True
        self.channel = channel
        print(f"Channel is now at {self.channel}")

    def toggle_power(self):
        if self.on:
            self.on = False
            print("TV is now off")
        else:
            self.on = True
            print("TV is now on")