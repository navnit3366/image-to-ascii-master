import numpy
from PIL import Image
import os
import secrets
from main import app
from flask import flash
def convert_img_to_ascii(fileName, cols, scale):
    grayscalestring = "@%#*+=-:. "
    image = Image.open(fileName).convert('L')
    image_width, image_height = image.size
    w = image_width/cols
    h = w/scale
    rows = int(image_height/h)
    if cols>image_width or rows > image_height:
        flash("File size too small","danger")
        return None
    asciirowlist = []
    for j in range(rows):
        y1 = int(j*h)
        y2 = int((j+1)*h)
        if j == rows-1:
            y2 = image_height
        #Create a new empty row
        asciirowlist.append("")
        for i in range(cols):
            x1 = int(i*w)
            x2 = int((i+1)*w)
            if i==cols-1:
                x2 = image_width
            #get a tile(portion of an image)
            tile = image.crop((x1, y1, x2, y2))
            #Convert The tile into a numpy array and find the average luminance of the tile
            avg = int(numpy.average(numpy.array(tile)))
            #Assign a character to the tile based on it's brightness
            grayscaleval = grayscalestring[int((avg*9)/255)]
            #Add the tile's corresponding ASCII character to the ASCII art
            asciirowlist[j] += grayscaleval
    return asciirowlist

# saves a picture from POST request to the filesystem
def save_picture(form_picture):
    random_hex = secrets.token_hex(8)
    _, f_ext = os.path.splitext(form_picture.filename)
    picture_fn = random_hex + f_ext
    picture_path = os.path.join(app.root_path, picture_fn)
    form_picture.save(picture_path)
    return picture_path