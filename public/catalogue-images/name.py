import os

os.chdir('D:\\Projects\\glazeline\\public\\catalogue-images\\bathroom-fittings')
print(os.getcwd())

for count, f in enumerate(os.listdir()):
    f_name, f_ext = os.path.splitext(f)

    new_name = f'{count}{f_ext}'
    os.rename(f, new_name)
