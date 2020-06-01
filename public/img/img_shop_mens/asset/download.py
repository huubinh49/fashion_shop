import json
import urllib.request

def convertName(s):
    s = s.lower()
    list_chars = s.split()
    res = list(filter(lambda item: item!=" ", list_chars))
    return "".join(res).replace("'", "")

def download():
 f = open("shop.json", "r")
 d = json.load(f)
 for i in range (0, len(d)):
     product_name = convertName(d[i]["name"])
     
     for j in range(0, len(d[i]["swatches"])):
         image= "https:"+d[i]["swatches"][j]["img"]
         image_name = "{0}_{1}_img.jpg".format(product_name, d[i]["swatches"][j]["color_name"])
         color = "https:"+d[i]["swatches"][j]["color"]
         color_name = "{0}_{1}_color.png".format(product_name, d[i]["swatches"][j]["color_name"])
         urllib.request.urlretrieve(image, image_name)
         urllib.request.urlretrieve(color, color_name)
     print("Done "+product_name)
 f.close()
 # image1 = "https://cdn.shopify.com/s/files/1/0277/0693/t/115/assets/purple_20x20.png?v=11377751011528770794"
 # 
 # 

download()

