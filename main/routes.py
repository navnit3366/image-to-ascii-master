from main.functions import convert_img_to_ascii, save_picture
from flask import render_template,flash, request, redirect
from main.forms import PostForm
from main import app
import os


@app.route("/", methods=['GET', 'POST'])
def index():
    form = PostForm()
    if form.validate_on_submit():
        if form.picture.data == None:
            flash("Select any image before submitting!", "danger")
            return redirect("/")
        imgname = save_picture(form.picture.data)
        cols = request.form.get('cols')
        scale = request.form.get('scale')
        if scale == None:
            scale = 0.43
        else:
            scale = float(scale)

        if cols == None:
            cols = 500
        else:
            cols = int(cols)
        
        result = convert_img_to_ascii(imgname, cols, scale)
        os.remove(imgname)
        if result != None:
            return render_template('index.html',form=form, result=result)
        else:
            return redirect("/")
    return render_template('index.html',form=form)

