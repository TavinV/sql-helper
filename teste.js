const produtos = [
    { id: 1, nome: 'Beijos de Morango 500g - Fini', validade: 9, valor: 3.50 },
    { id: 2, nome: 'Balas de Gelatina Ursinhos 100g - Haribo', validade: 8, valor: 2.90 },
    { id: 3, nome: 'Chocolate Ao Leite 1kg - Nestlé', validade: 10, valor: 45.00 },
    { id: 4, nome: 'Baton Ao Leite 16g - Garoto', validade: 8, valor: 1.20 },
    { id: 5, nome: 'Bombons Sortidos 500g - Lacta', validade: 9, valor: 30.00 },
    { id: 6, nome: 'Ferrero Rocher 24 Unidades - Ferrero Rocher', validade: 10, valor: 65.00 },
    { id: 7, nome: 'Trufas de Avelã 500g - Cacau Show', validade: 8, valor: 40.00 },
    { id: 8, nome: 'Chocolate Branco 100g - Copenhague', validade: 9, valor: 12.50 },
    { id: 9, nome: 'Gomas de Limão 300g - Fini', validade: 8, valor: 4.20 },
    { id: 10, nome: 'Balas de Ursinho Azedinha 250g - Haribo', validade: 9, valor: 5.30 },
    { id: 11, nome: 'Chocolates Surpresa 200g - Nestlé', validade: 10, valor: 18.00 },
    { id: 12, nome: 'Chocolate Meio Amargo 500g - Lacta', validade: 8, valor: 25.00 },
    { id: 13, nome: 'Pão de Mel 150g - Cacau Show', validade: 9, valor: 10.00 },
    { id: 14, nome: 'Trufas Sortidas 500g - Ferrero Rocher', validade: 10, valor: 48.00 },
    { id: 15, nome: 'Caixa de Bombom 400g - Garoto', validade: 9, valor: 20.00 },
    { id: 16, nome: 'Chocolate com Avelãs 250g - Copenhague', validade: 8, valor: 30.00 },
    { id: 17, nome: 'Marshmallow Torcido 200g - Fini', validade: 9, valor: 3.75 },
    { id: 18, nome: 'Amendoins Confeitados 300g - Nestlé', validade: 10, valor: 15.00 },
    { id: 19, nome: 'Mini Trufas 500g - Lacta', validade: 8, valor: 22.00 },
    { id: 20, nome: 'Bombom de Licor 180g - Garoto', validade: 9, valor: 8.00 },
    { id: 21, nome: 'Bombons de Pistache 300g - Cacau Show', validade: 10, valor: 35.00 },
    { id: 22, nome: 'Ovinhos de Páscoa 250g - Ferrero Rocher', validade: 9, valor: 29.00 },
    { id: 23, nome: 'Chocolates Personalizados 300g - Copenhague', validade: 8, valor: 50.00 },
    { id: 24, nome: 'Marshmallow Estrela 150g - Fini', validade: 10, valor: 4.20 },
    { id: 25, nome: 'Balas de Morango 100g - Haribo', validade: 8, valor: 2.50 },
    { id: 26, nome: 'Barra de Chocolate Amargo 100g - Nestlé', validade: 9, valor: 7.00 },
    { id: 27, nome: 'Trufas de Chocolate 150g - Lacta', validade: 10, valor: 12.00 },
    { id: 28, nome: 'Baton Duo 16g - Garoto', validade: 8, valor: 1.40 },
    { id: 29, nome: 'Bombons de Café 250g - Cacau Show', validade: 9, valor: 27.00 },
    { id: 30, nome: 'Ferrero Rondnoir 10 Unidades - Ferrero Rocher', validade: 10, valor: 28.00 },
    { id: 31, nome: 'Caixa de Trufas 500g - Copenhague', validade: 9, valor: 55.00 },
    { id: 32, nome: 'Balas Gelatinas Sortidas 250g - Fini', validade: 8, valor: 5.50 },
    { id: 33, nome: 'Chocolate Ao Leite 250g - Lacta', validade: 9, valor: 13.00 },
    { id: 34, nome: 'Confeito de Amendoim 300g - Nestlé', validade: 10, valor: 15.50 },
    { id: 35, nome: 'Chocolate Branco 200g - Garoto', validade: 8, valor: 9.00 },
    { id: 36, nome: 'Bombons de Avelã 300g - Cacau Show', validade: 9, valor: 32.00 },
    { id: 37, nome: 'Ovinhos de Chocolate 150g - Ferrero Rocher', validade: 10, valor: 16.00 },
    { id: 38, nome: 'Marshmallow Coração 180g - Fini', validade: 9, valor: 4.00 },
    { id: 39, nome: 'Balas de Banana 100g - Haribo', validade: 8, valor: 2.80 },
    { id: 40, nome: 'Bombons Sortidos 200g - Lacta', validade: 10, valor: 9.50 },
    { id: 41, nome: 'Mini Trufas de Limão 300g - Cacau Show', validade: 8, valor: 18.00 },
    { id: 42, nome: 'Ferrero Garden 8 Unidades - Ferrero Rocher', validade: 9, valor: 20.00 },
    { id: 43, nome: 'Chocolate Meio Amargo 200g - Nestlé', validade: 10, valor: 8.00 },
    { id: 44, nome: 'Balas de Gelatina Cobertas 200g - Fini', validade: 8, valor: 5.00 },
    { id: 45, nome: 'Chocolate Ao Leite 150g - Garoto', validade: 9, valor: 6.00 },
    { id: 46, nome: 'Trufas Sortidas 300g - Cacau Show', validade: 10, valor: 27.00 },
    { id: 47, nome: 'Ovinhos de Chocolate Sortidos 150g - Ferrero Rocher', validade: 8, valor: 17.50 },
    { id: 48, nome: 'Chocolate com Frutas 100g - Copenhague', validade: 9, valor: 15.00 },
    { id: 49, nome: 'Mini Beijos 180g - Fini', validade: 10, valor: 3.20 },
    { id: 50, nome: 'Gomas de Uva 250g - Haribo', validade: 8, valor: 4.80 },
    { id: 51, nome: 'Trufas Clássicas 200g - Lacta', validade: 9, valor: 10.50 },
    { id: 52, nome: 'Caixa de Bombons Ao Leite 350g - Garoto', validade: 10, valor: 19.00 },
    { id: 53, nome: 'Trufas de Maracujá 300g - Cacau Show', validade: 8, valor: 20.00 },
    { id: 54, nome: 'Ferrero Mon Cheri 6 Unidades - Ferrero Rocher', validade: 9, valor: 14.00 },
    { id: 55, nome: 'Balas de Frutas Sortidas 100g - Haribo', validade: 10, valor: 2.60 },
    { id: 56, nome: 'Mini Baton 10g - Garoto', validade: 8, valor: 0.80 },
    { id: 57, nome: 'Pérolas de Chocolate Branco 250g - Copenhague', validade: 9, valor: 27.50 },
    { id: 58, nome: 'Trufas de Frutas Vermelhas 180g - Lacta', validade: 10, valor: 14.00 },
    { id: 59, nome: 'Beijos de Morango 500g - Fini', validade: 9, valor: 4.30 },
    { id: 60, nome: 'Balas de Gelatina Ursinhos 100g - Haribo', validade: 8, valor: 3.20 },
    { id: 61, nome: 'Mini Trufas de Limão 300g - Cacau Show', validade: 8, valor: 18.00 },
    { id: 62, nome: 'Ferrero Garden 8 Unidades - Ferrero Rocher', validade: 9, valor: 20.00 },
    { id: 63, nome: 'Chocolate Meio Amargo 200g - Nestlé', validade: 10, valor: 8.00 },
    { id: 64, nome: 'Balas de Gelatina Cobertas 200g - Fini', validade: 8, valor: 5.00 },
    { id: 65, nome: 'Chocolate Ao Leite 150g - Garoto', validade: 9, valor: 6.00 },
    { id: 66, nome: 'Trufas Sortidas 300g - Cacau Show', validade: 10, valor: 27.00 },
    { id: 67, nome: 'Ovinhos de Chocolate Sortidos 150g - Ferrero Rocher', validade: 8, valor: 17.50 },
    { id: 68, nome: 'Chocolate com Frutas 100g - Copenhague', validade: 9, valor: 15.00 },
    { id: 69, nome: 'Mini Beijos 180g - Fini', validade: 10, valor: 3.20 },
    { id: 70, nome: 'Gomas de Uva 250g - Haribo', validade: 8, valor: 4.80 },
    { id: 71, nome: 'Trufas Clássicas 200g - Lacta', validade: 9, valor: 10.50 },
    { id: 72, nome: 'Caixa de Bombons Ao Leite 350g - Garoto', validade: 10, valor: 19.00 },
    { id: 73, nome: 'Trufas de Maracujá 300g - Cacau Show', validade: 8, valor: 20.00 },
    { id: 74, nome: 'Ferrero Mon Cheri 6 Unidades - Ferrero Rocher', validade: 9, valor: 14.00 },
    { id: 75, nome: 'Balas de Frutas Sortidas 100g - Haribo', validade: 10, valor: 2.60 },
    { id: 76, nome: 'Mini Baton 10g - Garoto', validade: 8, valor: 0.80 },
    { id: 77, nome: 'Pérolas de Chocolate Branco 250g - Copenhague', validade: 9, valor: 27.50 },
    { id: 78, nome: 'Trufas de Frutas Vermelhas 180g - Lacta', validade: 10, valor: 12.00 },
    { id: 79, nome: 'Confeitos de Chocolate 500g - Nestlé', validade: 8, valor: 22.00 },
    { id: 80, nome: 'Trufas Tradicionais 150g - Cacau Show', validade: 9, valor: 12.50 },
    { id: 81, nome: 'Ferrero Dark Noir 10 Unidades - Ferrero Rocher', validade: 10, valor: 35.00 },
    { id: 82, nome: 'Marshmallow de Framboesa 200g - Fini', validade: 8, valor: 3.90 },
    { id: 83, nome: 'Balas de Gelatina Pêssego 100g - Haribo', validade: 9, valor: 2.50 },
    { id: 84, nome: 'Chocolate Amargo 200g - Lacta', validade: 10, valor: 11.50 },
    { id: 85, nome: 'Bombom de Cereja 150g - Cacau Show', validade: 8, valor: 18.00 },
    { id: 86, nome: 'Chocolate com Castanhas 250g - Garoto', validade: 9, valor: 14.00 }
];

function gerarDataAleatoriaUltimos5Meses() {
    // Obtém a data atual
    const dataAtual = new Date();

    // Define o intervalo de 5 meses atrás
    const cincoMesesAtras = new Date();
    cincoMesesAtras.setMonth(dataAtual.getMonth() - 5);

    // Gera um timestamp aleatório dentro do intervalo
    const dataAleatoriaTimestamp = Math.random() * (dataAtual.getTime() - cincoMesesAtras.getTime()) + cincoMesesAtras.getTime();

    // Converte o timestamp em uma data
    const dataAleatoria = new Date(dataAleatoriaTimestamp);

    // Retorna a data formatada no padrão YYYY-MM-DD
    return dataAleatoria.toISOString().split('T')[0];
}


function gerarPedido(clienteId, consultorId, id_lista) {
    let sql = `-- Inserindo o pedido\n`;
    sql += `INSERT INTO Pedido (id_cliente, id_consultor, id_lista, data_pedido) VALUES (${clienteId}, ${consultorId}, ${id_lista}, ${gerarDataAleatoriaUltimos5Meses()});\n\n`;

    let subtotal = 0;
    let listaPedido = [];

    // Enquanto o subtotal for menor que 50.000, adiciona produtos
    while (subtotal < 50000) {
        // Seleciona um produto aleatório
        const produto = produtos[Math.floor(Math.random() * produtos.length)];
        
        // Quantidade aleatória entre 1 e 150
        const quantidade = Math.floor(Math.random() * 150) + 1;
        
        // Subtotal
        const valorTotal = produto.valor * quantidade;
        subtotal += valorTotal;
        
        // Adiciona o produto à lista de pedido incluindo id_lista
        listaPedido.push(`(${id_lista}, ${produto.id}, ${quantidade})`);
    }

    // Adiciona os produtos ao comando SQL
    sql += `-- Inserindo produtos no pedido\n`;
    sql += `INSERT INTO Lista_Pedido (id_lista, id_produto, quantidade) VALUES\n`;
    sql += listaPedido.join(",\n") + ";\n";

    // Retorna o SQL gerado
    return sql;
}


// Função para gerar 5 pedidos
let id_lista = 0
function gerarPedidos() {
    const clienteId = document.getElementById('cliente_id').value;
    const consultorId = document.getElementById('consultor_id').value;
    
    let pedidosSql = '';
    
    for (let i = 0; i < 5; i++) {
        pedidosSql += gerarPedido(clienteId, consultorId, id_lista + 1) + "\n\n";
        id_lista += 1
    }
    // Exibe os comandos SQL no console (ou você pode exibir na tela)
    document.getElementById('resultadoSQL').textContent = pedidosSql;
}
