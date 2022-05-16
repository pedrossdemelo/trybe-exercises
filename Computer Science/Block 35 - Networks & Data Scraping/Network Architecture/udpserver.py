import socketserver


class MyUDPHandler(socketserver.BaseRequestHandler):
    def handle(self):
        socket = self.request[1]
        socket.sendto("Hello there!".encode('utf-8'), self.client_address)
        data = self.request[0].strip()
        print("{} wrote:".format(self.client_address[0]))
        print(data)
        socket.sendto(data.upper(), self.client_address)


if __name__ == "__main__":
    HOST, PORT = "localhost", 8084
    with socketserver.UDPServer((HOST, PORT), MyUDPHandler) as server:
        server.serve_forever()
