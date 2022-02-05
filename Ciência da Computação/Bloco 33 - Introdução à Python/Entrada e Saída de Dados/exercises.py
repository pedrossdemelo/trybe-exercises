def print_as_sqr_tri(string):
    size = len(string)
    for i in range(size, 0, -1):
        print(string[:i])


print_as_sqr_tri("PEDRO")