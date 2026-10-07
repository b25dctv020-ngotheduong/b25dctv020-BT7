# CV cá nhân bằng React

## Chạy ứng dụng

```bash
npm install
npm run dev
```

Trang CV được chia thành các component `Sidebar`, `ContactInfo`, `Section`,
`SkillList` và `ProjectList`. Kỹ năng, dự án và thông tin liên hệ được lưu
trong mảng rồi truyền cho component bằng props. `Section` nhận nội dung qua
`children`.
