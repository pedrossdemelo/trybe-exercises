from abc import ABC, abstractmethod


class PngInterface(ABC):
    @abstractmethod
    def draw(self):
        raise NotImplementedError


class PngImage(PngInterface):
    def __init__(self, png_path):
        self.png_path = png_path
        self.format = "raster"

    def draw(self):
        print(f"Drawing PNG {self.png_path} with {self.format}")


class SvgImage:
    def __init__(self, svg_path):
        self.svg_path = svg_path
        self.format = "vector"

    def get_image(self):
        return f"SVG {self.png_path} with {self.format}"


class SvgImageAdapter(PngImage, SvgImage):
    def __init__(self, png_path):
        PngImage.__init__(self, png_path)
        SvgImage.__init__(self, None)

    def draw(self): return self.get_image()


print(SvgImageAdapter("./image.png").draw()) # SVG ./image.png with vector
