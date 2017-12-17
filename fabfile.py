#!/usr/bin/python
from fabric.api import *
import os
import json


def fcount():
    path = "C:/gitProjects/"
    allClientFolders = len(os.walk('C:/gitProjects/clients/').next()[1])
    #print len(os.walk('C:/gitProjects/clients/').next()[1])

def showAllCurClientsFolders():
    root, dirs, files = os.walk('C:/gitProjects/clients/').next()
    print dirs


def searchPixelByClient():
    clientLinkID = raw_input("What client are you looking for (ex:usc) ")
    filepath = 'C:/gitProjects/clients/%s/pac7.2/script/pixels.js' %clientLinkID
    textToSearch = raw_input("What pixel are you looking for?(ex:pixel_lib.FB) ")
    cnt = 0
    with open(filepath) as fin:
        for line in fin:
            if textToSearch in line:
                #line = 'user_pref("network.proxy.socks", "the.value.i.want");\n'
                cnt += 1
    print('%s - %s Pixel fires: %s' %(clientLinkID, textToSearch,cnt) +' times')
    fin.close()

def searchPixelByAllClients():
    def _createJSON(obj, filename):
	    with open('%s_pixels.json' %filename, 'w') as outfile:  
		    json.dump(obj, outfile)
    
    data = {}
    textToSearch = raw_input("What pixel are you looking for?(ex:pixel_lib.FB) ")
    root, dirs, files = os.walk('C:/gitProjects/clients/').next()
    for c in dirs:
        filepath = 'C:/gitProjects/clients/%s/pac7.2/script/pixels.js' % c
        #if(os.path.exists(filepath)):
        try:
            if(os.path.exists(filepath)):
                filepath = 'C:/gitProjects/clients/%s/pac7.2/script/pixels.js' % c
            else:
                filepath = 'C:/gitProjects/clients/%s/pac7.2/pixel/js/pixels.js' % c
            
            cnt = 0
            with open(filepath) as fin:
                for line in fin:
                    if textToSearch in line:
                        cnt += 1
            if(cnt > 0):
                print('%s - %s Pixel fires: %s' %(c, textToSearch,cnt) +' times')
                data[c] = []
                data[c].append({
                    textToSearch:cnt
                })
                _createJSON(data,textToSearch)
                #Todo: create a json file and show a GUI
                #[
                #    {'linkID':
                #        {'FB':3,GA:1}
                #    }
                #]
            fin.close()
        except:
            print ('%s - file not found' % c)