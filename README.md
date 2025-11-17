<p align="center">
  <img alt="Repo size"  src="https://img.shields.io/github/repo-size/geovaneborba/ftr-pos-kubernetes?color=4f46e5&style=for-the-badge">
  <img alt="GitHub top language"  src="https://img.shields.io/github/languages/top/geovaneborba/ftr-pos-kubernetes?color=4f46e5&style=for-the-badge"> 
  <img alt="GitHub language count"  src="https://img.shields.io/github/languages/count/geovaneborba/ftr-pos-kubernetes?color=4f46e5&style=for-the-badge">
</p>

<p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0;
  <a href="#books-aprendizado">Aprendizado</a> &#xa0; | &#xa0;
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#warning-pré-requisitos"> Pré requisitos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-começando">Começando</a> &#xa0;
</p>

<br>

## :dart: Sobre

Sistema de upload de imagens com arquitetura Kubernetes, implementando DevOps practices com monitoramento, auto-scaling e CI/CD. O projeto inclui uma API para upload de arquivos no Cloudflare R2, geração de relatórios e deploy automatizado em cluster Kubernetes.

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>

## :books: Aprendizado

- Orquestração de containers com Kubernetes
- Configuração de HPA (Horizontal Pod Autoscaling)
- Monitoramento com New Relic
- Gerenciamento de Secrets com HashiCorp Vault
- ConfigMaps e Deployments Kubernetes
- CI/CD para aplicações containerizadas
- Monitoramento de métricas com Metrics Server

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>

## :rocket: Tecnologias

As seguintes tecnologias foram usadas na construção do projeto:

- **Containerização**: Docker
- **Orquestração**: Kubernetes
- **Runtime**: Node.js
- **Framework**: Fastify
- **Banco de Dados**: PostgreSQL
- **Armazenamento**: Cloudflare R2
- **Monitoramento**: New Relic
- **Secrets**: HashiCorp Vault
- **Infraestrutura**: Kind (Kubernetes in Docker)

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>

### :gear: Estrutura do Projeto

```bash
ftr-pos-kubernetes/
├── upload-widget-server/ # API de upload de imagens
│ ├── k8s/ # Manifestos Kubernetes
│ └── src/ # Código fonte da aplicação
├── infra/ # Configurações de infraestrutura
└── [README.md](./README.md)
```

## :warning: Pré-requisitos

Antes de começar, você precisa ter as seguintes ferramentas instaladas em sua máquina:

- [Docker](https://www.docker.com/)
- [Kubernetes CLI (kubectl)](https://kubernetes.io/docs/tasks/tools/)
- [Kind](https://kind.sigs.k8s.io/)
- [Node.js](https://nodejs.org/en/)

### Configurando o Cluster Kubernetes Local

```bash
# Criar cluster Kubernetes local com Kind
$ kind create cluster --config infra/kind.yaml

# Instalar Metrics Server para monitoramento
$ kubectl apply -f [metrics-server.yaml](http://_vscodecontentref_/0)
```

### :checkered_flag: Começando

```bash
# Clone o repositório
$ git clone https://github.com/geovaneborba/ftr-pos-kubernetes.git

# Entre na pasta do projeto

$ cd ftr-pos-kubernetes

# Configure o namespace para a aplicação

$ kubectl apply -f infra/namespace.yaml

# Aplique os secrets (configure antes os valores reais)

$ kubectl apply -f [secret.yaml](./upload-widget-server/k8s/secret.yaml )

# Aplique o ConfigMap

$ kubectl apply -f upload-widget-server/k8s/config-map.yaml

# Deploy da aplicação

$ kubectl apply -f [deployment.yaml](./upload-widget-server/k8s/deployment.yaml)
$ kubectl apply -f upload-widget-server/k8s/service.yaml

# Configurar HPA (Auto-scaling)

$ kubectl apply -f [hpa.yaml](./upload-widget-server/k8s/hpa.yaml)

# Verificar o status dos recursos

$ kubectl get all -n upload-widget
```
