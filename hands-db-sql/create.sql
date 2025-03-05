-- 子どもを管理するテーブル
CREATE TABLE children (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    gender VARCHAR(10),
    class_name VARCHAR(50),
    guardian_name VARCHAR(50),
    allergy VARCHAR(100)
);

-- サンプルデータを挿入
INSERT INTO children (name, age, gender, class_name, guardian_name, allergy) VALUES
('たろう', 5, '男', 'ひまわり組', '山田 太郎', '卵アレルギー'),
('はなこ', 4, '女', 'さくら組', '田中 花子', NULL),
('けんじ', 3, '男', 'もも組', '佐藤 健', '乳アレルギー'),
('さゆり', 5, '女', 'ひまわり組', '鈴木 さゆり', NULL),
('ひろし', 4, '男', 'さくら組', '中村 博', '小麦アレルギー');
