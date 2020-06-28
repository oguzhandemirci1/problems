var gun = new Date();
var adet = 0;

for(var yil = 1901; yil <= 2000; yil++){
    for(var ay=0; ay<= 11; ay++){
        gun.setFullYear(yil,ay,1);
        if(gun.getDay()==0){
            adet++;
        }
    }
}