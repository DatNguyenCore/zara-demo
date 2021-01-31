# zara-demo
Cấu trúc thư mục của dự án.
============================

> Chú ý: 
> - Tất cả code của dự án được đặt trong thư mục src.

    .
    ├── node_modules            # chức thư viện bên thứ 3 cài bằng lệnh npm install.
    ├── src                     # mã nguồn của dự án.
    │   ├── components          # chứa các component dùng chung.
    │   ├── images              # chứa ảnh, logo.
    │   ├── navigations         # chứa cấu hình để điều hướng giữa các màn hình.
    │   ├── screens             # chứa các màn hình.
    │   ├── services            # chứa dữ liệu giả lập.
    │   ├── themes              # chứa các cấu hình về giao diện.
    │   ├── utils               # chứa các hàm hỗ trỡ xử lý.
    ├── App.js                  # root component.
    ├── package.json            # cấu hình thư viện bên thứ 3. VD: số version của các thư viện, tên thư viện,...
    └── ...

>  tên thư mục viết thường và thêm s hoặc es ở cuối tên. VD: components, images,...
> `LICENSE`, `README.md`

Cách cài đặt môi trường phát triển trên expo.
============================

### Yêu cầu ban đầu
- Máy đã cài [node js](https://nodejs.org/en/) phiên bản recommended for most users.
- Máy điện thoại cài Expo go [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US), [iOS](https://apps.apple.com/us/app/expo-client/id982107779)
- Máy tính cài IDE Android Studio hoặc Xcode để chạy máy ảo.
- Máy cài visual code và cài thêm các plug-in 
  + GitLens — Git supercharged: hỗ trợ kiểm soát version của mã nguồn.
  + Prettier - Code formatter: hỗ trợ format code.
  + React-Native/React/Redux snippets for es6/es7: hỗ trợ nhắc lệnh và phím tắt khi viết React.
### [Cài đặt expo](https://reactnative.dev/docs/environment-setup)
- Máy windown: mở CMD gõ lệnh **npm install -g expo-cli**.
- Máy mac: mở Terminal gõ lệnh **sudo npm install -g expo-cli**
> Chú ý:
>  + CMD đang chạy bị dừng lại trong khoảng thời gian dài thì gõ Enter để chạy tiếp.
>  + Kiểm tra expo có trên máy hay không gõ lệnh **expo --version**
  
Tạo dự án đầu tiên.
============================
- Bước 1: Tại thư mục destop gõ lệnh **expo init hello-world** . 
Chọn black template nhấn Enter. Mở dự án bằng visual code.
![ale imahe](https://github.com/DatNguyenCore/zara-demo/blob/master/imgs/choose-template.png?raw=true)

- Bước 2: Tạo cmd trong dự án gõ **npm start** . Ứng dụng sẽ được host trên máy tính 
![ale imahe](https://github.com/DatNguyenCore/zara-demo/blob/master/imgs/choose-device.png?raw=true)
> - npm start: host server dev mobile. 
> - npm run android: host dự án trên máy ảo android.
> - npm run ios: host dự án trên máy ảo iOS.

- Bước 3: Lấy điện thoại quét mà QR code.
![ale imahe](https://github.com/DatNguyenCore/zara-demo/blob/master/imgs/interface-server.png?raw=true)
> Chú ý: 
> - Máy điện thoại và máy tính phải sử dụng cùng mạng lan.







