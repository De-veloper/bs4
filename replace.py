#Load a html file and replace a new tag.
from bs4 import BeautifulSoup
import urllib

file = urllib.urlopen("file:///c://Clients/working/python/bs4Test/test.html")

soup = BeautifulSoup(file,'html.parser')
a_tag = soup.a

new_tag = soup.new_tag("b")
new_tag.string = "example.net"
a_tag.i.replace_with(new_tag)

a_tag

print(soup.prettify())