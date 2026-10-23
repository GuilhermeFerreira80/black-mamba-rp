@echo off
chcp 65001 >nul
echo ============================================================
echo   🐍 BLACK MAMBA - ATUALIZADOR DO COFRE CRIPTOGRAFADO 🔐
echo ============================================================
echo.
echo A ler ficheiros da pasta data/ e a compilar app.js...
echo.
node build.js

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ❌ Ocorreu um erro na compilação. Verifica os teus ficheiros JSON.
    echo.
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo ============================================================
set /p PUSH_GITHUB="👉 Queres enviar as alterações para o GitHub agora? (S/N) [Padrão: S]: "
if /i "%PUSH_GITHUB%"=="" set PUSH_GITHUB=S

if /i "%PUSH_GITHUB%"=="S" (
    echo.
    echo 🚀 A enviar alterações para o GitHub...
    git add .
    git commit -m "update: atualizar dados e cofre criptografico"
    git push origin main
    if %ERRORLEVEL% EQU 0 (
        echo.
        echo ✅ SUCESSO! O teu repositório no GitHub foi atualizado!
    ) else (
        echo.
        echo ⚠️ Ocorreu um problema no git push. Verifica a tua ligação à internet.
    )
) else (
    echo.
    echo 💾 Alterações guardadas apenas localmente no teu PC.
)

echo.
pause
