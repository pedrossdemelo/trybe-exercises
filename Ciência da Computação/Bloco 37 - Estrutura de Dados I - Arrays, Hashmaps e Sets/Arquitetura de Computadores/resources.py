import platform
from subprocess import check_output


if platform.system() == "Linux":
    print(check_output(["lscpu"]).decode('utf-8'))
elif platform.system() == "Darwin":
    print(check_output(["sysctl", "-n", "machdep.cpu.brand_string"]).decode('utf-8'))


