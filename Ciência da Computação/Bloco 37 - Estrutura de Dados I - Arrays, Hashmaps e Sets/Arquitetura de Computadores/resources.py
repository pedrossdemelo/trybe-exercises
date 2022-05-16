import os
import time
import platform
from subprocess import check_output

def print_info():
    if platform.system() == "Linux":
        print(check_output(["lscpu"]).decode('utf-8'))
        # print how many cores in the cpu
        print(check_output(["nproc"]).decode('utf-8'))
        # print clock speed in MHz
        print(check_output(["lscpu", "-p", "|", "grep", "CPU MHz"]).decode('utf-8'))
        # print cache memory
        print(check_output(["lscpu", "-p", "|", "grep", "L1 cache"]).decode('utf-8'))
        # print memory info
        print(check_output(["cat", "/proc/meminfo"]).decode('utf-8'))
        # print available memory
        print(check_output(["free", "-m"]).decode('utf-8'))
        # print used memory
        print(check_output(["free", "-m", "-t"]).decode('utf-8'))
    elif platform.system() == "Darwin":
        print(check_output(["sysctl", "-n", "machdep.cpu.brand_string"]).decode('utf-8'))
        # print how many cores in the cpu
        print(check_output(["sysctl", "-n", "hw.physicalcpu"]).decode('utf-8'))
        # print clock speed in MHz
        print(check_output(["sysctl", "hw.cpufrequency_max"]).decode('utf-8'))
        # print cache memory
        print(check_output(["sysctl", "-n", "hw.l1icachesize"]).decode('utf-8'))
        # print memory info
        print(check_output("top -l 1 | head -n 10 | grep PhysMem", shell=True).decode('utf-8'))


def get_memory_usage():
    while True:
        if platform.system() == "Linux":
            print(check_output(["free", "-m"]).decode('utf-8'))
        elif platform.system() == "Darwin":
            print(check_output("top -l 1 | head -n 10 | grep PhysMem", shell=True).decode('utf-8'))
        time.sleep(1)


def get_pid():
    current_pid = os.getpid()
    all_pids = check_output("ps -e", shell=True).decode('utf-8')
    my_pid = [pid for pid in all_pids.split("\n") if pid.startswith(str(current_pid))][0]
    print(my_pid)


get_pid() # 20401 ??         0:00.04 /opt/homebrew/Cellar/python@3.10/3.10.1/Frameworks/Python.framework/Versions/3.10/Resources/Python.app/Contents/MacOS/Python -u /Users/pedrosousa/Documents/Trybe/trybe-exercises/Ciência da Computação/Bloco 37 - Estrutura de Dados I - Arrays, Hashmaps e Sets/Arquitetura de Computadores/resources.py