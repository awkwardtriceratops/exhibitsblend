import numpy as np
import fs as fs
import matplotlib.pyplot as plt

for letter in ['j','q','r','s','t']:
    imagedirectory='images/'+letter+'ai.png'
    #Split image into 4 quadrants and save them
    image = plt.imread(imagedirectory)
    image1 = image[0:512,0:512]
    image2 = image[0:512,512:1024]
    image3 = image[512:1024,0:512]
    image4 = image[512:1024,512:1024]

    #Save images    
    image1directory='blended/'+letter+'1.png'
    image2directory='blended/'+letter+'2.png'
    image3directory='blended/'+letter+'3.png'
    image4directory='blended/'+letter+'4.png'
    plt.imsave(image1directory,image1)
    plt.imsave(image2directory,image2)
    plt.imsave(image3directory,image3)
    plt.imsave(image4directory,image4)
    
