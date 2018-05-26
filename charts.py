# coding=utf-8
import os
import sys
import json
from collections import OrderedDict
import shutil
from pyecharts import Bar, Pie, Line
from pyecharts_snapshot.main import make_a_snapshot

config_name = "charts.txt"
if getattr(sys, 'frozen', False):
    application_path = os.path.dirname(sys.executable)
elif __file__:
    application_path = os.path.dirname(__file__)

config_path = os.path.join(application_path, config_name)
fo = open(config_path, "r")
chartid = 0
p_path = ""
d_path = ""
row = []
col = []
count = 0
str = fo.readline()
cateid = 0
xname = ""
yname = ""
while str:
    if str[0] == "#":
        str = fo.readline()
        continue
    else:
        if count == 0:
            if str[7] != '0':
                cateid = 1
        if count == 1:
            if str.__len__() == 8:
                sys.exit("请先配置数据path")
            d_path = str[7:-1]
        if count == 2:
            if str.__len__() == 9:
                chartid = 0
            else:
                chartid = int(str[8])
        if count == 3:
            if str.__len__() == 5:
                row.append(0)
            else:
                i = 4
                while i < str.__len__():
                    row.append(int(str[i]))
                    i += 2
        if count == 4:
            if str.__len__() == 5:
                col.append(0)
            else:
                i = 4
                col = []
                while i < str.__len__():
                    col.append(int(str[i]))
                    i += 2
        if count == 5:
            p_path = str[7:-1]
            if p_path == "":
                print "请输入图片储存路径"
        if count == 6:
            xname = str[11:]
        if count == 7:
            yname = str[11:]
        count += 1
        str = fo.readline()

fo.close()

with open(d_path, 'r') as fin:
    json = json.loads(fin.read(), object_pairs_hook=OrderedDict, encoding="utf-8")
categerise = []
categerise_f = []
legend_f = []
data_f = []
data_f_f = []
i = 0
j = 0
data = []
tmp = []
row_count = len(json)
col_count = len(json[0].values())
key = []
value = []
for i in range(0, row_count, +1):
    data.append(list(json[i].values()))
    categerise.append(data[i][0])
    del data[i][0]
legend = list(json[0].keys())

if row[0] != 0:
    for part in row:
        categerise_f.append(categerise[part - 1])

else:
    categerise_f = categerise

if col[0] != 0:
    first = 1
    n = 0

    for part in col:
        legend_f.append(legend[part])

else:
    legend_f = legend

if cateid == 0:
    if row[0] != 0:
        for part in row:
            data_f.append(data[part-1])

    else:
        data_f = data

    if col[0] != 0:
        first = 1
        n = 0

        for part in data_f:
            data_tmp = []
            for i in col:
                data_tmp.append(part[i-1])
            data_f_f.append(data_tmp)

    else:
        data_f_f = data_f

if cateid == 1:

    tmp = categerise_f
    categerise_f = []
    categerise_f = legend_f
    legend_f = []
    legend_f = tmp
    del data[:]
    for i in range(1, len(list(json[0].values())), +1):

        data_tmp = []
        for part in json:
            data_tmp.append(list(part.values())[i])
        data.append(data_tmp)

    if row[0] != 0:
        for i in col:
            data_f.append(data[i-1])
        for part in data_f:
            data_tmp = []
            for i in row:
                data_tmp.append(part[i-1])
            data_f_f.append(data_tmp)


if chartid == 0:
    pie = Pie("", width=600, height=500)
    for part in range(0, len(categerise_f), +1):
        pie.add(categerise_f[part], legend_f, data_f_f[part], is_label_show=True)
        pie.render()
        make_a_snapshot('render.html', "pie.jpeg", 1)
        os.remove("render.html")
        shutil.copyfile("pie.jpeg", p_path)
        os.remove("pie.jpeg")

if chartid == 1:
    bar = Bar(title="", width=800, height=400)
    for part in range(0, len(categerise_f), +1):
        bar.add(categerise_f[part], legend_f, data_f_f[part],
                is_label_show=True, xaxis_name=xname, yaxis_name=yname,
                xaxis_name_pos="end", yaxis_name_pos="end",
                xaxis_name_gap=10, yaxis_name_gap=10)
    bar.render()
    make_a_snapshot('render.html', "bar.jpeg", 1)
    #os.remove("render.html")
    #shutil.copyfile("bar.jpeg", p_path)
    #os.remove("bar.jpeg")
    bar.show_config()
if chartid == 2:
    line = Line("")
    for part in range(0, len(categerise_f), +1):
        line.add(categerise_f[part], legend_f, data_f_f[part],
                 is_label_show=True, xaxis_name=xname, yaxis_name=yname,
                 xaxis_name_pos="end", yaxis_name_pos="end",
                 xaxis_name_gap=10, yaxis_name_gap=10)
    line.render()
    make_a_snapshot('render.html', "line.jpeg", 1)
    os.remove("render.html")
    shutil.copyfile("line.jpeg", p_path)
    os.remove("line.jpeg")
