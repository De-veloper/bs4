filepath = 'c://Clients/working/python/bs4/pixels.js'  
textToSearch = raw_input("What pixel are you looking for?(ex:pixel_lib.FB) ")
cnt = 0
with open(filepath) as fin:
    for line in fin:
        if textToSearch in line:
            #line = 'user_pref("network.proxy.socks", "the.value.i.want");\n'
            cnt += 1
print('%s Pixel fires: %s' %(textToSearch,cnt) +' times')
fin.close()