from time import perf_counter

from main_memory import MainMemory
from secondary_memory import SecondaryMemory

main = MainMemory()
secondary = SecondaryMemory()

# Numeros aleatórios a serem somados
RANDOM_NUMBERS = [36912, 84300] * 200

def timer(string, initial_time):
    """Função auxiliar para print temporizado"""
    print(string)
    print(f"Tempo para a tarefa terminar: {perf_counter() - initial_time:6f}\n")


# Desempenho da memória primária
main_load_init_time = perf_counter()
# for number in RANDOM_NUMBERS:
#     main.load(number)
# timer("Números carregados na memória principal", main_load_init_time)
# Time: 0.000055s for 100 numbers
# Time: 0.000102s for 200 numbers
# Time: 0.000089s for 200 numbers without cleanup

main_get_init_time = perf_counter()
main_sum = sum([main.get(i) for i in range(len(RANDOM_NUMBERS))])
timer(f"Soma na memória principal: {main_sum}", main_get_init_time)
# Time: 0.000047s for 100 numbers
# Time: 0.000102s for 200 numbers
# Time: 0.000099s for 200 numbers without cleanup
# Time: 0.000064s for 200 numbers without load

main_clean_init_time = perf_counter()
main.clean()
timer("Clean na memória principal", main_clean_init_time)
# Time: 0.000003s for 100 numbers 
# Time: 0.000004s for 200 numbers 
# Time: 0.000002s for 200 numbers without load


# Desempenho da memória secundária
secondary_load_initial_time = perf_counter()
# for number in RANDOM_NUMBERS:
#     secondary.load(number)
# timer("Números carregados na memória secundária", secondary_load_initial_time)
# Time: 0.029877s for 100 numbers
# Time: 0.087865s for 200 numbers
# Time: 0.324601s for 200 numbers without cleanup

secondary_get_init_time = perf_counter()
secondary_sum = sum([secondary.get(i) for i in range(len(RANDOM_NUMBERS))])
timer(f"Soma na memória secundária: {secondary_sum}", secondary_get_init_time)
# Time: 0.003471s for 100 numbers
# Time: 0.007136s for 200 numbers
# Time: 0.076750s for 200 numbers without cleanup
# Time: 0.023742s for 200 numbers without load

secondary_clean_init_time = perf_counter()
secondary.clean()
timer("Clean na memória secundária", secondary_clean_init_time)
# Time: 0.006941s for 100 numbers
# Time: 0.020439s for 200 numbers
# Time: 0.092397s for 200 numbers without load