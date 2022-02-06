import socketserver


class MyTCPHandler(socketserver.BaseRequestHandler):
    def handle(self):
        self.data = self.request.recv(1024).strip()
        data = self.data
        print(f"[{self.client_address[0]}]: {data.decode('utf-8')}")
        self.request.sendall(
            f"Received: {data.decode('utf-8')}\n".encode('utf-8'))


if __name__ == "__main__":
    HOST, PORT = "localhost", 8085
    with socketserver.TCPServer((HOST, PORT), MyTCPHandler) as server:
        server.serve_forever()
