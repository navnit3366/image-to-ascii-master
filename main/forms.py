#Server side validation of the submitted images
from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed
class PostForm(FlaskForm):
    picture = FileField('Attach a Snap', validators=[FileAllowed(['jpg','jpeg','png'])])
    