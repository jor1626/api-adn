
        var myChart1 = echarts.init(document.getElementById('main1'));
        var myChart2 = echarts.init(document.getElementById('main2'));
        var myChart3 = echarts.init(document.getElementById('main3'));

        document.getElementById('indo').text('JORDAN OROZCOOOOOOOOOOOOOOOOOOOOO !!!')

        var option1 = {
            title: {
                text: 'Control de gastos',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                bottom: 'bottom',
                data: ['UTILIDAD 2018', 'UTILIDAD 2019']
            },
            xAxis: {
                type: 'category',
                data: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'UTILIDAD 2018',
                    type: 'line',
                    data: [0,-1,2,2,-1],
                    color: ['skyblue'],
                    
                },
                {
                    name: 'UTILIDAD 2019',
                    type: 'line',
                    data: [0,1,2,3,4,5],
                    color: ['darkblue'],
                }
            ]
        };

        var option2 = {
            
            title: {
                text: 'Control de gastos',
                x: 'center'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer : {            
                    type : 'shadow'     
                }
            },
            legend: {
                itemGap: 0,
                itemWidth : 10,
                orient: 'horizontal',
                bottom: 'bottom',
                data: ['INGRESOS OPERACIONALES', 'COSTOS DE VENTAS'],
            },
            xAxis: {
                type: 'category',
                data: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
                axisTick: {
                    alignWithLabel: true
                }
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    color: ['darkblue'],
                    name: 'INGRESOS OPERACIONALES',
                    type: 'bar',
                    barWidth: '10%',
                    data: [0,0,0,0,0,200],
                    
                },
                {
                    color: ['skyblue'],
                    name: 'COSTOS DE VENTAS',
                    type: 'bar',
                    barWidth: '10%',
                    data: [0,100,0,0,0,0],
                    
                }
            ]
        };

        var option3 = {
            title: {
                text: 'Ingresos vs Egresos',
                x: 'center'
            },
            legend: {
                itemGap: 0,
                itemWidth : 15,
                orient: 'horizontal',
                bottom: 'bottom',
                data: ['NO OPERACIONALES 2018', 'ADMINISTRATIVOS 2018', 'VENTA 2018']
            },
            tooltip: {},
            dataset: {
                dimensions: ['month', 'NO OPERACIONALES 2018', 'ADMINISTRATIVOS 2018', 'VENTA 2018'],
                source: [
                    {month: 'Ene', 'NO OPERACIONALES 2018': 2.3, 'ADMINISTRATIVOS 2018': 1.8, 'VENTA 2018': 0.7},
                    {month: 'Feb', 'NO OPERACIONALES 2018': 1.1, 'ADMINISTRATIVOS 2018': 3.4, 'VENTA 2018': 0.1},
                    {month: 'Mar', 'NO OPERACIONALES 2018': 2.4, 'ADMINISTRATIVOS 2018': 1.2, 'VENTA 2018': 2.5},
                    {month: 'Abr', 'NO OPERACIONALES 2018': 0.4, 'ADMINISTRATIVOS 2018': 1.9, 'VENTA 2018': 2.1},
                    {month: 'May', 'NO OPERACIONALES 2018': 0.4, 'ADMINISTRATIVOS 2018': 0.9, 'VENTA 2018': 1.1},
                    {month: 'Jun', 'NO OPERACIONALES 2018': 1.4, 'ADMINISTRATIVOS 2018': 0.9, 'VENTA 2018': 4.1}
                ]
            },
            xAxis: {type: 'category'},
            yAxis: {
                type: 'value'
            },
            series: [
                {type: 'bar', color: ['darkblue'], barWidth: '10%'},
                {type: 'bar',  color: ['skyblue'], barWidth: '10%'},
                {type: 'bar', color: ['red'], barWidth: '10%'  }
            ]
        };

        myChart1.setOption(option1);
        myChart2.setOption(option2);
        myChart3.setOption(option3);

    
    