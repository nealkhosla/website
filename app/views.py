from app import app
from flask import render_template, flash, redirect

@app.route('/')
@app.route('/index')
def index():
	return render_template('index.html')

@app.route('/about')
def about():
	return render_template('about.html')

@app.route('/projects')
def projects():
	return render_template('projects.html')

@app.route('/cs')
def cs():
	return render_template('cs.html')

@app.route('/math')
def math():
	return render_template('math.html')

@app.route('/stats')
def stats():
	return render_template('stats.html')

@app.route('/mse')
def mse():
	return render_template('mse.html')

@app.route('/resume')
def resume():
	return render_template('resume.html')
