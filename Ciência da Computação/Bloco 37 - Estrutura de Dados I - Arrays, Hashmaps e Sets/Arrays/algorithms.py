# In a software monitor, which checks the resiliency of other software, we need
# to know the maximum time that a software has remained unstable. To do this,
# every hour a request is made to the system and we check if it is ok. Assuming
# an array containing the states collected by our software, calculate the
# maximum time that the server remained unstable.
# 1 = stable, 0 = unstable
# Input: [1,1,1,1,0,0,1]
# Output: 4

def max_stable_time(array):
    max_time = 0
    current_time = 0
    for i in range(len(array)):
        if array[i] == 1:
            current_time += 1
        else:
            max_time = max(max_time, current_time)
            current_time = 0
    return max_time
