class Bird:
    wings: int = 2
    def __init__(self, color):
        self.color = color
    def chirp(self):
        print('sqwaak')
    def fly(self):
        print('im flying')

class Hawk(Bird):
    def __init__(self, color):
        super().__init__(color)
    def __len__(self):
        return self.wings

h1 = Hawk('red')
# h1.fly()
print(len(h1))
