@echo off
echo ============================================================
echo   BLACK MAMBA - ATUALIZADOR DO COFRE CRIPTOGRAFADO
echo ============================================================
echo.
echo A ler ficheiros da pasta data e a compilar app.js...
echo.

node build.js

if errorlevel 1 (
    echo.
    echo [ERRO] Ocorreu um erro na compilacao. Verifica os teus ficheiros JSON.
    echo.
    pause
    exit /b 1
)

echo.
echo ============================================================
set /p PUSH_GITHUB="Queres enviar as alteracoes para o GitHub agora? (S/N) [Padrao: S]: "
if /i "%PUSH_GITHUB%"=="" set PUSH_GITHUB=S

if /i "%PUSH_GITHUB%"=="S" (
    echo.
    echo A enviar alteracoes para o GitHub...
    git add .
    git commit -m "update: atualizar dados e cofre criptografico"
    git push origin main
    if errorlevel 1 (
        echo.
        echo [AVISO] Ocorreu um problema no git push. Verifica a tua ligacao a internet.
    ) else (
        echo.
        echo [SUCESSO] O teu repositorio no GitHub foi atualizado!
        echo.
        echo [DICA] O GitHub Pages demora cerca de 1 a 2 minutos a atualizar o site.
        echo        No teu navegador, prime Ctrl + F5 para recarregar sem cache!
    )
) else (
    echo.
    echo Alteracoes guardadas apenas localmente no teu PC.
)

echo.
pause
