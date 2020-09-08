var tampociones=4;
        var vPosima = new Array(tampociones);
        var vPosimaAux = new Array(tampociones);
        var vPosimaRespuesta = new Array(tampociones);

        function limpiar(){
            document.getElementById('pa').value="";
            document.getElementById('pb').value="";
            document.getElementById('pc').value="";
            document.getElementById('pd').value="";
            document.getElementById('pe').value="";
        }

        function obtenerAA(){
            var a =parseInt(document.getElementById('pa').value);
            var b =parseInt(document.getElementById('pb').value); 
            var c =parseInt(document.getElementById('pc').value); 
            var d =parseInt(document.getElementById('pd').value); 
            var e =parseInt(document.getElementById('pe').value);
            soloNumeros(a,b,c,d,e,1);
        }

        function obtenerAB(){
            var a =parseInt(document.getElementById('pa').value);
            var b =parseInt(document.getElementById('pb').value); 
            var c =parseInt(document.getElementById('pc').value); 
            var d =parseInt(document.getElementById('pd').value); 
            var e =parseInt(document.getElementById('pe').value);
            soloNumeros(a,b,c,d,e,2);
        }

        function soloNumeros(a,b,c,d,e,x){
            if(/^[0-9]+$/.test(a) && /^[0-9]+$/.test(b) && /^[0-9]+$/.test(c) && /^[0-9]+$/.test(d) && /^[0-9]+$/.test(e)){
                continuar(a,b,c,d,e,x);
            }else{
                alert('Por favor, Debe Ingresar solo números');
            } 
        }

        function continuar(a,b,c,d,e,x){
            llenarArreglo(a,b,c,d,e); 
            var tam=ordenar(); 
            llenarMatriz(a,b,c,d,e,tam);
            if(x==1){
                obtenerPrimerAtaque(a,b,c,d,e,tam);
            }else{
                obtenerSegundoAtaque(a,b,c,d,e,tam);
            }
            
        }

        function obtenerPrimerAtaque(a,b,c,d,e,tam){
            vPosimaRespuesta=new Array(tam);
            var sumAtaques=0;
            var sumaAtaqueA=0;
            for(i=1;i<=tam;i++) {
                sumAtaques=ma[i]+mb[i]+mc[i]+md[i]+me[i];
                if(sumAtaques==5){
                    vPosimaRespuesta[i]=25;
                }
                if(sumAtaques==4){
                    vPosimaRespuesta[i]=20;
                }
                if(sumAtaques==3){
                    vPosimaRespuesta[i]=10;
                }
                if(sumAtaques==2){
                    vPosimaRespuesta[i]=5;
                }
                if(sumAtaques==1){
                    vPosimaRespuesta[i]=3;
                }
            }
            var cad="";
            for(i=1;i<=tam;i++) {
                cad+="Ataque: "+vPosimaRespuesta[i]+" % \n";
            }
            document.getElementById("myTextarea").value = cad;
            for(i=1;i<=tam;i++) {
                sumaAtaqueA+=vPosimaRespuesta[i];
            }
            document.getElementById("ataquea").value = sumaAtaqueA +" %";
        }

        function obtenerSegundoAtaque(a,b,c,d,e,tam){
            vPosimaRespuesta=new Array(tam);
            var sumAtaques=0;
            var sumaAtaqueB=0;
            vPosimaRespuesta=new Array(tam);
            for(i=1;i<=tam;i++) {
                sumAtaques=ma[i]+mb[i]+mc[i]+md[i]+me[i];
                if(sumAtaques==5){
                    vPosimaRespuesta[i]=25; 
                }
                if(sumAtaques==4){
                    vPosimaRespuesta[i]=20; 
                }
                if(sumAtaques==3){
                    vPosimaRespuesta[i]=10;
                }
                if(sumAtaques==2){
                    vPosimaRespuesta[i]=6;
                }
                if(sumAtaques==1){
                    vPosimaRespuesta[i]=3; 
                }
            }

            var cad="";
            for(i=1;i<=tam;i++) {
                if(vPosimaRespuesta[i]==6){
                    cad+="2 Ataques: "+vPosimaRespuesta[i]+" % \n"; 
                }else{
                    cad+="Ataque: "+vPosimaRespuesta[i]+" % \n"; 
                }
            }
            document.getElementById("myTextarea").value = cad;
            for(i=1;i<=tam;i++) {
                sumaAtaqueB+=vPosimaRespuesta[i];
            }
            document.getElementById("ataqueb").value = sumaAtaqueB +" %";
        }

        function llenarArreglo(a,b,c,d,e){
            vPosima[0],vPosimaAux[0]=a;
            vPosima[1],vPosimaAux[1]=b;
            vPosima[2],vPosimaAux[2]=c;
            vPosima[3],vPosimaAux[3]=d;
            vPosima[4],vPosimaAux[4]=e;
        }
        
        var ma,mb,mc,md,me;
        function llenarMatriz(a,b,c,d,e,tam){
            ma=new Array(tam); 
            mb=new Array(tam);
            mc=new Array(tam);
            md=new Array(tam);
            me=new Array(tam);
            for(i=1;i<=tam;i++) {
                ma[i]=1;
                if(i<=b){
                    mb[i]=1;
                }else{
                    mb[i]=0;
                } 
                if(i<=c){
                    mc[i]=1;
                }else{
                    mc[i]=0;
                } 
                if(i<=d){
                    md[i]=1;
                }else{
                    md[i]=0;
                } 
                if(i<=e){
                    me[i]=1;
                }else{
                    me[i]=0;
                }
            }
        }

        function ordenar() {
            for(var k=0;k<tampociones;k++) {
                for(var f=0;f<tampociones-k;f++) {
                    if (vPosimaAux[f]>vPosimaAux[f+1]) {
                        var aux;
                        aux=vPosimaAux[f];
                        vPosimaAux[f]=vPosimaAux[f+1];
                        vPosimaAux[f+1]=aux;
                    }
                }
            }
            return vPosimaAux[tampociones];
        }    
