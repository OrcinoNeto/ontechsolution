#!/bin/bash
# Builda o projeto Blazor WebAssembly e copia os arquivos estáticos para a pasta static

dotnet publish OntechSolution.Site/OntechSolution.Site.csproj -c Release -o publish

rm -rf static
mkdir static
cp -r publish/wwwroot/* static/
