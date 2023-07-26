# Image to ASCII converter
A web application built with Flask that generates an ASCII art from any given image along with the option to download it as a text file.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Clone the repository into your local machine and install the dependencies with
```
pip install -r requirements.txt
```
Then run the development server by executing the run.py python script
```
python run.py
```
If you enable debug support the server will reload itself on code changes, and it will also provide you with a helpful debugger if things go wrong. Simply set debug to True in run.py
```
app.run(debug=False) #line to be changed
```

## Built With

* [Flask](http://flask.pocoo.org/docs/1.0/) - The web framework used
* [Flask-WTF](https://flask-wtf.readthedocs.io/en/stable/) - Server side form validation
* [Numpy](https://docs.scipy.org/doc/numpy/) - used for image processing

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


