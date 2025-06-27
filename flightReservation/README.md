# Uçuş Rezervasyon Sistemi

Angular öğrenmek için yapılmış olan bir uygulamadır

## API tasarım 

flightReservationAPI projesi ile backend tarafına ulaşabilirsiniz...

## Sonuçta ne elde edeceğiz ??

Uygulama ile öncelikli olarak uçuş listesi sıralanmaktadır ... bunun için tarih ve istikamet yerlerini girdikten sonra arama yaparsak liste önümüze gelecektir.
uçuş güzergah ve tarihleri için ayrıca giriş ekranı yapılmamış olup veritabanından insert edebilirsiniz....
ekran görüntüsü aşağıdaki gibidir...
![image](https://user-images.githubusercontent.com/45200802/183426881-21547d7e-1550-4aef-b8b1-0a9c77098fff.png)


## 2. Aşama

Seçtiğimiz günde belirlediğimiz havayolu şirketini seçersek bizi bir sonraki aşamaya yönlendirmektedir.
burada seçtiğimiz şirkete ilgili kişiyi kaydetme aşamasıdır.
burda bir form oluşturuyoruz ve giriş ekranını dolduruyoruz ![image](https://user-images.githubusercontent.com/45200802/183428347-31319e83-2219-4551-8797-6cf0ae00e38b.png)


## Son aşama

eğer kaydımızı onaylarsak bize bir rezervasyon numarası vermektedir.Bu numarayı daha sonra Check-in kısmında kullanacağız....çünkü henüz uçuşumuz onaylanmamaıştır.
![image](https://user-images.githubusercontent.com/45200802/183428887-109e8df5-7fb2-439a-a2c7-e5ac46368aa1.png)


## CHECK-IN İŞLEMİ İLE PROJEMİZİ TAMAMLIYORUZ...

Elimizde bulunan rezervasyon numarasını girerek ,ilgili kişi çağırılır ve check-in kısmında bulunan bagaj kilo miktarını giriyoruz.. onayladıktan sonra checkin false olan durum aktif olup kaydımız tamamlanmış bulunmaktadır.bunun için bir buton kullanmış bulunmaktayız bu buton ile start veriyoruz ve işlemler tamamlanıyor
![image](https://user-images.githubusercontent.com/45200802/183429615-3ac96d61-24a5-442a-8e1f-de5645153923.png)


## son kontrol ve onay

Yolcu ve uçuş bilgileri ilgili rezervasyon numarasına göre ekrana gelmektedir.bagaj miktarını girip onayladığımız takdirde check-in işlemi gerçekleşmiş olmaktadır.
![image](https://user-images.githubusercontent.com/45200802/183431511-f7a39015-8ea8-4d69-bcba-dc8fca04e0c2.png)

![image](https://user-images.githubusercontent.com/45200802/183431853-1667318a-8c09-4eef-baed-0e28d6df70f5.png)

