#!/usr/bin/python
from fabric.api import *
import os
import json

#import time
#from sftpsync import Sftp

import pysftp

# disable all warnings
import warnings
warnings.filterwarnings('ignore')

# ignore a host keys for pysftp module
cnopts = pysftp.CnOpts()
cnopts.hostkeys = None



def fcount():
    path = "C:/gitProjects/"
    allClientFolders = len(os.walk('C:/gitProjects/clients/').next()[1])
    #print len(os.walk('C:/gitProjects/clients/').next()[1])

def showAllCurClientsFolders():
    root, dirs, files = os.walk('C:/gitProjects/clients/').next()
    print dirs


def searchPixelByClient(clientLinkID):
    try:
        filepath = 'C:/gitProjects/clients/%s/pac7.2/script/pixels.js' %clientLinkID
        if(os.path.exists(filepath)):
            filepath = 'C:/gitProjects/clients/%s/pac7.2/script/pixels.js' %clientLinkID
        else:
            filepath = 'C:/gitProjects/clients/%s/pac7.2/pixel/js/pixels.js' % clientLinkID
    
        pixelName = raw_input("What pixel are you looking for?(ex:pixel_lib.FB) ")
        cnt = 0
        with open(filepath) as fin:
            for line in fin:
                if pixelName in line:
                    #line = 'user_pref("network.proxy.socks", "the.value.i.want");\n'
                    cnt += 1
        print('%s - %s Pixel fires: %s' %(clientLinkID, pixelName,cnt) +' times')
        if(cnt>0):
            data = []
            data.append({
                pixelName:cnt
            })
            fileName = '%s_%s' %(clientLinkID, pixelName)
            createJSON(data,fileName)
            fin.close()

    except:
        print ('%s - file not found' % clientLinkID)

def createJSON(obj, filename):
    with open('%s_pixels.json' %filename, 'w') as outfile:  
        json.dump(obj, outfile)
@task
def searchPixel():
    
    textToSearch = raw_input("Seach all cleints or a spefic client? (ex: leave empty to seach all) ")
    data = {}

    if (textToSearch !='' ):
        searchPixelByClient(textToSearch)
    else:
        
        pixelName = raw_input("What pixel are you looking for?(ex:pixel_lib.FB) ")
        root, dirs, files = os.walk('C:/gitProjects/clients/').next()

        for c in dirs:
            filepath = 'C:/gitProjects/clients/%s/pac7.2/script/pixels.js' % c
            try:
                if(os.path.exists(filepath)):
                    filepath = 'C:/gitProjects/clients/%s/pac7.2/script/pixels.js' % c
                else:
                    filepath = 'C:/gitProjects/clients/%s/pac7.2/pixel/js/pixels.js' % c
                
                cnt = 0
                with open(filepath) as fin:
                    for line in fin:
                        if pixelName in line:
                            cnt += 1
                if(cnt > 0):
                    print('%s - %s Pixel fires: %s' %(c, pixelName,cnt) +' times')
                    data[c] = []
                    data[c].append({
                        pixelName:cnt
                    })
                    createJSON(data,pixelName)
                    #Todo: create a json file and show a GUI
                    #[
                    #    {'linkID':
                    #        {'FB':3,GA:1}
                    #    }
                    #]
                fin.close()
            except:
                print ('%s - file not found' % c)

def searchPixelByClient2(clientLinkID):
    try:
        filepath = '/home/webdev/evenue/customize/ev_%s/script/pixels.js' % clientLinkID
        
        #if(os.path.exists(filepath)):
        #    filepath = '/home/webdev/evenue/customize/ev_%s/script/pixels.js' % clientLinkID
        #else:
        #    filepath = '/home/webdev/evenue/customize/ev_%s/pixel/js/pixels.js' % clientLinkID
    
        pixelName = raw_input("What pixel are you looking for?(ex:pixel_lib.FB) ")
        cnt = 0

        with pysftp.Connection(host=ADMIN25_HOST, username=ADMIN25_USER, password=ADMIN25_PASSWD, cnopts=cnopts) as sftp:
            print sftp.exists(filepath)
            if(sftp.exists(filepath)):
                with sftp.open(filepath) as fin:
                    for line in fin:
                        if pixelName in line:
                           cnt += 1
        print('%s - %s Pixel fires: %s' %(clientLinkID, pixelName,cnt) +' times')
        #if(cnt>0):
        #    data = []
        #    data.append({
        #        pixelName:cnt
        #    })
        #    fileName = '%s_%s' %(clientLinkID, pixelName)
        #    createJSON(data,fileName)
        fin.close()
    except:
        print ('%s - file not found' % clientLinkID)

@task
def searchLivePixel():

    textToSearch = raw_input("Seach all cleints or a spefic client? (ex: leave empty to seach all) ")
    data = {}

    if (textToSearch !='' ):
        searchPixelByClient2(textToSearch)
    else:
        
        pixelName = raw_input("What pixel are you looking for?(ex:pixel_lib.FB) ")
        root, dirs, files = os.walk('C:/gitProjects/clients/').next()

        for c in dirs:
            filepath = 'C:/gitProjects/clients/%s/pac7.2/script/pixels.js' % c
            try:
                if(os.path.exists(filepath)):
                    filepath = 'C:/gitProjects/clients/%s/pac7.2/script/pixels.js' % c
                else:
                    filepath = 'C:/gitProjects/clients/%s/pac7.2/pixel/js/pixels.js' % c
                
                cnt = 0
                with open(filepath) as fin:
                    for line in fin:
                        if pixelName in line:
                            cnt += 1
                if(cnt > 0):
                    print('%s - %s Pixel fires: %s' %(c, pixelName,cnt) +' times')
                    data[c] = []
                    data[c].append({
                        pixelName:cnt
                    })
                    createJSON(data,pixelName)
                    #Todo: create a json file and show a GUI
                    #[
                    #    {'linkID':
                    #        {'FB':3,GA:1}
                    #    }
                    #]
                fin.close()
            except:
                print ('%s - file not found' % c)