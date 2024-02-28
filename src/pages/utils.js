export const getCroppedImg = async (imagemOriginal, croppedAreaPixels) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const { x, y, width, height } = croppedAreaPixels;

    canvas.width = width;
    canvas.height = height;

    const imagem = new Image();
    imagem.src = imagemOriginal;

    // Esperar a imagem carregar
    await new Promise((resolve) => {
        imagem.onload = () => resolve();
    });

    // Desenhar a imagem cortada no canvas
    ctx.drawImage(imagem, x, y, width, height, 0, 0, width, height);

    // Obter a imagem cortada como um Blob
    return new Promise((resolve) => {
        canvas.toBlob((blob) => {
            resolve(blob);
        }, 'image/jpeg'); // Você pode ajustar o tipo de imagem conforme necessário
    });
};
