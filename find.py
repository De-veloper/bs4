#filepath = 'c://Clients/working/python/bs4/pixels.js'  
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