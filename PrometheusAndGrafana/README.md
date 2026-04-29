# Monitoring with Grafana, Loki and Prometheus

### Prerequisite
- Basic Knowlege of Node.js and Express Framework
- Basic to Intermediate knowledge in Docker and Containerization - [Learn Docker Containerization]

### Install Prom-client
npm i prom-client

### Installation and Setup
#### 1. Prometheus Server
- Create a `prometheus-config.yml` file and copy the following configration. Don't forget to replace `<NDOEJS_SERVER_ADDRESS>` with actual value.
```yml
global:
  scrape_interval: 4s

scrape_configs:
  - job_name: prometheus
    static_configs:
      - targets: ["<NDOEJS_SERVER_ADDRESS>"]
```
- Start the Prometheus Server using docker compose. create a docker-compose.yml file and copy it.
```yml
version: "3"

services:
  prom-server:
    image: prom/prometheus
    ports:
      - 9090:9090
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
```
Great, The prometheus server is now up and running at PORT 9090

#### 2. Setup Grafana
```bash
docker run -d -p 3000:3000 --name=grafana grafana/grafana-oss
```
![grafana](https://grafana.com/static/img/grafana/showcase_visualize.jpg)

### 3. Setup Loki Server
```bash
docker run -d --name=loki -p 3100:3100 grafana/loki
```


### Steps to work using Grafana and Prometheus for nodejs server

1. install prom-client:

```bash
npm i prom-client

```
2. Import in your file

3. collect all metrics like CPU usage, RAM usage etc. by using this function

```bash
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ register: client.register })
```

4. make a route like /metrics

```bash
app.get("/metrics", async (req,res)=>{
    res.setHeader('Content-Type', client.register.contentType)
    const metrics = await client.register.metrics();
    res.send(metrics)
})

```
5. setup prometheus server:
- Create a `prometheus-config.yml` file and copy the following configration. Don't forget to replace `<NDOEJS_SERVER_ADDRESS>` with actual value like ["your_ip_address:Port"].Here you acn not give localhost
```yml
global:
  scrape_interval: 4s

scrape_configs:
  - job_name: prometheus
    static_configs:
      - targets: ["<NDOEJS_SERVER_ADDRESS>"]
```

6.
- Start the Prometheus Server using docker compose(docker compose up). create a docker-compose.yml file and copy it. Change  ./prometheus.yml with your own file like prometheus-config.yml. change it only before : in volumes.
```yml
version: "3"

services:
  prom-server:
    image: prom/prometheus
    ports:
      - 9090:9090
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
```
Great, The prometheus server is now up and running at PORT 9090

7. for open source(for free )
#### 7. Setup Grafana
```bash
docker run -d -p 3000:3000 --name=grafana grafana/grafana-oss
```




