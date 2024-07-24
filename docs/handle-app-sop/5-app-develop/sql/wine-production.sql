/*
 Navicat Premium Data Transfer

 Source Server         : 10.14.152.165
 Source Server Type    : MySQL
 Source Server Version : 50736
 Source Host           : 10.14.152.165:3306
 Source Schema         : wine-production

 Target Server Type    : MySQL
 Target Server Version : 50736
 File Encoding         : 65001

 Date: 22/07/2024 15:01:44
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for blend
-- ----------------------------
DROP TABLE IF EXISTS `blend`;
CREATE TABLE `blend` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `blending_batch` varchar(255) NOT NULL COMMENT '勾兑批次',
  `name_of_finished_liquor` varchar(255) NOT NULL COMMENT '成品酒名称',
  `blending_date` date NOT NULL COMMENT '勾兑日期',
  `blending_quantity` varchar(255) NOT NULL COMMENT '勾兑数量',
  `balance_quantity` varchar(255) NOT NULL COMMENT '结存数量',
  `mixing_time_min` int(11) NOT NULL COMMENT '搅拌时间（分钟）',
  `verification_report` varchar(255) NOT NULL COMMENT '校验报告',
  `blender` varchar(255) NOT NULL COMMENT '勾兑员',
  `storage_location` varchar(255) NOT NULL COMMENT '储存位置',
  `associated_packaging_batch` varchar(255) DEFAULT NULL COMMENT '关联包装批次',
  `associated_brewing_batches` varchar(255) DEFAULT NULL COMMENT '关联酿造批次',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `blending_batch` (`blending_batch`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COMMENT='酒体设计';

-- ----------------------------
-- Records of blend
-- ----------------------------
BEGIN;
INSERT INTO `blend` (`id`, `blending_batch`, `name_of_finished_liquor`, `blending_date`, `blending_quantity`, `balance_quantity`, `mixing_time_min`, `verification_report`, `blender`, `storage_location`, `associated_packaging_batch`, `associated_brewing_batches`) VALUES (5, 'BLD001', '成品白酒', '2024-06-17', '160.21L', '12.8L', 30, '合格', '翟少卫', '天翼包材库', 'PKG001', 'BRW001');
INSERT INTO `blend` (`id`, `blending_batch`, `name_of_finished_liquor`, `blending_date`, `blending_quantity`, `balance_quantity`, `mixing_time_min`, `verification_report`, `blender`, `storage_location`, `associated_packaging_batch`, `associated_brewing_batches`) VALUES (6, 'BLD002', '成品白酒', '2024-06-19', '270L', '100L', 30, '合格', '武清', '天翼包材库', 'PKG002', 'BRW002');
COMMIT;

-- ----------------------------
-- Table structure for bottle_of_wine
-- ----------------------------
DROP TABLE IF EXISTS `bottle_of_wine`;
CREATE TABLE `bottle_of_wine` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `bottle_code` varchar(255) NOT NULL COMMENT '瓶码',
  `product` varchar(255) NOT NULL COMMENT '产品',
  `productive_time` date NOT NULL COMMENT '生产时间',
  `specifications` varchar(255) NOT NULL COMMENT '规格',
  `raw_material` varchar(255) NOT NULL COMMENT '原料',
  `associated_box_code` varchar(255) DEFAULT NULL COMMENT '关联箱码',
  `associated_consumption_code` varchar(255) DEFAULT NULL COMMENT '关联消费码',
  `associated_packaging_batch` varchar(255) DEFAULT NULL COMMENT '关联包装批次',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `bottle_code` (`bottle_code`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COMMENT='瓶酒';

-- ----------------------------
-- Records of bottle_of_wine
-- ----------------------------
BEGIN;
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (5, 'BTL001', '酿酒52%vol', '2024-06-20', '500ml', '优质高粱', 'CASE001', 'CODE2115385546801', 'PKG001');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (6, 'BTL002', '酿酒52%vol', '2024-06-20', '500ml', '优质高粱', 'CASE001', 'CODE2115385546802', 'PKG001');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (7, 'BTL003', '酿酒52%vol', '2024-06-20', '500ml', '优质高粱', 'CASE001', 'CODE2115385546803', 'PKG001');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (8, 'BTL004', '酿酒52%vol', '2024-06-20', '500ml', '优质高粱', 'CASE001', 'CODE2115385546804', 'PKG001');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (9, 'BTL005', '酿酒52%vol', '2024-06-20', '500ml', '优质高粱', 'CASE001', 'CODE2115385546805', 'PKG001');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (10, 'BTL006', '酿酒52%vol', '2024-06-20', '500ml', '优质高粱', 'CASE001', 'CODE2115385546806', 'PKG001');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (11, 'BTL007', '酿酒52%vol', '2024-06-20', '500ml', '优质高粱', 'CASE002', 'CODE2115385546807', 'PKG001');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (12, 'BTL008', '酿酒52%vol', '2024-06-20', '500ml', '优质高粱', 'CASE002', 'CODE2115385546808', 'PKG001');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (13, 'BTL009', '酿酒52%vol', '2024-06-20', '500ml', '优质高粱', 'CASE002', 'CODE2115385546809', 'PKG001');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (14, 'BTL010', '酿酒52%vol', '2024-06-20', '500ml', '优质高粱', 'CASE002', 'CODE21153855468010', 'PKG001');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (15, 'BTL011', '酿酒52%vol', '2024-06-20', '500ml', '优质高粱', 'CASE002', 'CODE2115385546811', 'PKG001');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (16, 'BTL012', '酿酒52%vol', '2024-06-20', '500ml', '优质高粱', 'CASE002', 'CODE2115385546812', 'PKG001');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (17, 'BTL013', '酿酒52%vol', '2024-06-20', '500ml', '优质高粱', 'CASE003', 'CODE2115385546813', 'PKG001');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (18, 'BTL014', '酿酒52%vol', '2024-06-20', '500ml', '优质高粱', 'CASE003', 'CODE2115385546814', 'PKG001');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (19, 'BTL015', '酿酒52%vol', '2024-06-20', '500ml', '优质高粱', 'CASE003', 'CODE2115385546815', 'PKG001');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (20, 'BTL016', '酿酒52%vol', '2024-06-20', '500ml', '优质高粱', 'CASE003', 'CODE2115385546816', 'PKG001');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (21, 'BTL017', '酿酒52%vol', '2024-06-20', '500ml', '优质高粱', 'CASE003', 'CODE2115385546817', 'PKG001');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (22, 'BTL018', '酿酒52%vol', '2024-06-20', '500ml', '优质高粱', 'CASE003', 'CODE2115385546818', 'PKG001');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (23, 'BTL019', '酿酒52%vol', '2024-06-20', '500ml', '优质高粱', 'CASE004', 'CODE2115385546819', 'PKG001');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (24, 'BTL020', '酿酒52%vol', '2024-06-20', '500ml', '优质高粱', 'CASE004', 'CODE2115385546820', 'PKG001');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (25, 'BTL021', '酿酒52%vol', '2024-06-20', '500ml', '优质高粱', 'CASE004', 'CODE2115385546821', 'PKG001');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (26, 'BTL022', '酿酒52%vol', '2024-06-20', '500ml', '优质高粱', 'CASE004', 'CODE2115385546822', 'PKG001');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (27, 'BTL023', '酿酒52%vol', '2024-06-20', '500ml', '优质高粱', 'CASE004', 'CODE2115385546823', 'PKG001');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (28, 'BTL024', '酿酒52%vol', '2024-06-20', '500ml', '优质高粱', 'CASE004', 'CODE2115385546824', 'PKG001');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (29, 'BTL025', '酿酒52%vol', '2024-06-20', '500ml', '优质高粱', 'CASE005', 'CODE2115385546825', 'PKG001');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (30, 'BTL026', '酿酒52%vol', '2024-06-20', '500ml', '优质高粱', 'CASE005', 'CODE2115385546826', 'PKG001');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (31, 'BTL027', '酿酒52%vol', '2024-06-20', '500ml', '优质高粱', 'CASE005', 'CODE2115385546827', 'PKG001');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (32, 'BTL028', '酿酒52%vol', '2024-06-20', '500ml', '优质高粱', 'CASE005', 'CODE2115385546828', 'PKG001');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (33, 'BTL029', '酿酒52%vol', '2024-06-20', '500ml', '优质高粱', 'CASE005', 'CODE2115385546829', 'PKG001');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (34, 'BTL030', '酿酒52%vol', '2024-06-20', '500ml', '优质高粱', 'CASE005', 'CODE2115385546830', 'PKG001');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (35, 'BTL031', '酿酒52%vol', '2024-06-21', '500ml', '优质高粱', 'CASE006', 'CODE2115385546831', 'PKG002');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (36, 'BTL032', '酿酒52%vol', '2024-06-21', '500ml', '优质高粱', 'CASE006', 'CODE2115385546832', 'PKG002');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (37, 'BTL033', '酿酒52%vol', '2024-06-21', '500ml', '优质高粱', 'CASE006', 'CODE2115385546833', 'PKG002');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (38, 'BTL034', '酿酒52%vol', '2024-06-21', '500ml', '优质高粱', 'CASE006', 'CODE2115385546834', 'PKG002');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (39, 'BTL035', '酿酒52%vol', '2024-06-21', '500ml', '优质高粱', 'CASE006', 'CODE2115385546835', 'PKG002');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (40, 'BTL036', '酿酒52%vol', '2024-06-21', '500ml', '优质高粱', 'CASE006', 'CODE2115385546836', 'PKG002');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (41, 'BTL037', '酿酒52%vol', '2024-06-21', '500ml', '优质高粱', 'CASE007', 'CODE2115385546837', 'PKG002');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (42, 'BTL038', '酿酒52%vol', '2024-06-21', '500ml', '优质高粱', 'CASE007', 'CODE2115385546838', 'PKG002');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (43, 'BTL039', '酿酒52%vol', '2024-06-21', '500ml', '优质高粱', 'CASE007', 'CODE2115385546839', 'PKG002');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (44, 'BTL040', '酿酒52%vol', '2024-06-21', '500ml', '优质高粱', 'CASE007', 'CODE2115385546840', 'PKG002');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (45, 'BTL041', '酿酒52%vol', '2024-06-21', '500ml', '优质高粱', 'CASE007', 'CODE2115385546841', 'PKG002');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (46, 'BTL042', '酿酒52%vol', '2024-06-21', '500ml', '优质高粱', 'CASE007', 'CODE2115385546842', 'PKG002');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (47, 'BTL043', '酿酒52%vol', '2024-06-21', '500ml', '优质高粱', 'CASE008', 'CODE2115385546843', 'PKG002');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (48, 'BTL044', '酿酒52%vol', '2024-06-21', '500ml', '优质高粱', 'CASE008', 'CODE2115385546844', 'PKG002');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (49, 'BTL045', '酿酒52%vol', '2024-06-21', '500ml', '优质高粱', 'CASE008', 'CODE2115385546845', 'PKG002');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (50, 'BTL046', '酿酒52%vol', '2024-06-21', '500ml', '优质高粱', 'CASE008', 'CODE2115385546846', 'PKG002');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (51, 'BTL047', '酿酒52%vol', '2024-06-21', '500ml', '优质高粱', 'CASE008', 'CODE2115385546847', 'PKG002');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (52, 'BTL048', '酿酒52%vol', '2024-06-21', '500ml', '优质高粱', 'CASE008', 'CODE2115385546848', 'PKG002');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (53, 'BTL049', '酿酒52%vol', '2024-06-21', '500ml', '优质高粱', 'CASE009', 'CODE2115385546849', 'PKG002');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (54, 'BTL050', '酿酒52%vol', '2024-06-21', '500ml', '优质高粱', 'CASE009', 'CODE2115385546850', 'PKG002');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (55, 'BTL051', '酿酒52%vol', '2024-06-21', '500ml', '优质高粱', 'CASE009', 'CODE2115385546851', 'PKG002');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (56, 'BTL052', '酿酒52%vol', '2024-06-21', '500ml', '优质高粱', 'CASE009', 'CODE2115385546852', 'PKG002');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (57, 'BTL053', '酿酒52%vol', '2024-06-21', '500ml', '优质高粱', 'CASE009', 'CODE2115385546853', 'PKG002');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (58, 'BTL054', '酿酒52%vol', '2024-06-21', '500ml', '优质高粱', 'CASE009', 'CODE2115385546854', 'PKG002');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (59, 'BTL055', '酿酒52%vol', '2024-06-21', '500ml', '优质高粱', 'CASE010', 'CODE2115385546855', 'PKG002');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (60, 'BTL056', '酿酒52%vol', '2024-06-21', '500ml', '优质高粱', 'CASE010', 'CODE2115385546856', 'PKG002');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (61, 'BTL057', '酿酒52%vol', '2024-06-21', '500ml', '优质高粱', 'CASE010', 'CODE2115385546857', 'PKG002');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (62, 'BTL058', '酿酒52%vol', '2024-06-21', '500ml', '优质高粱', 'CASE010', 'CODE2115385546858', 'PKG002');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (63, 'BTL059', '酿酒52%vol', '2024-06-21', '500ml', '优质高粱', 'CASE010', 'CODE2115385546859', 'PKG002');
INSERT INTO `bottle_of_wine` (`id`, `bottle_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_box_code`, `associated_consumption_code`, `associated_packaging_batch`) VALUES (64, 'BTL060', '酿酒52%vol', '2024-06-21', '500ml', '优质高粱', 'CASE010', 'CODE2115385546860', 'PKG002');
COMMIT;

-- ----------------------------
-- Table structure for box_wine
-- ----------------------------
DROP TABLE IF EXISTS `box_wine`;
CREATE TABLE `box_wine` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `case_code` varchar(255) NOT NULL COMMENT '箱码',
  `product` varchar(255) NOT NULL COMMENT '产品',
  `productive_time` date NOT NULL COMMENT '生产时间',
  `specifications` varchar(255) NOT NULL COMMENT '规格',
  `raw_material` varchar(255) NOT NULL COMMENT '原料',
  `associated_receipt_form` varchar(255) DEFAULT NULL COMMENT '关联入库单',
  `associated_outbound_order` varchar(255) DEFAULT NULL COMMENT '关联出库单',
  `associated_accept_receipt` varchar(255) DEFAULT NULL COMMENT '关联收货单',
  `associated_shipping_order` varchar(255) DEFAULT NULL COMMENT '关联发货单',
  `associated_sign_receipt` varchar(255) DEFAULT NULL COMMENT '关联签收单',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `case_code` (`case_code`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COMMENT='箱酒';

-- ----------------------------
-- Records of box_wine
-- ----------------------------
BEGIN;
INSERT INTO `box_wine` (`id`, `case_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_receipt_form`, `associated_outbound_order`, `associated_accept_receipt`, `associated_shipping_order`, `associated_sign_receipt`) VALUES (14, 'CASE001', '酿酒52%vol', '2024-06-20', '1*6*500ml', '优质高粱', 'SXRK24070114213801', 'DN2024062201', 'TSQ202406231', 'SDQ202406301', 'SIGN2105385546861');
INSERT INTO `box_wine` (`id`, `case_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_receipt_form`, `associated_outbound_order`, `associated_accept_receipt`, `associated_shipping_order`, `associated_sign_receipt`) VALUES (15, 'CASE002', '酿酒52%vol', '2024-06-20', '1*6*500ml', '优质高粱', 'SXRK24070114213801', 'DN2024062201', 'TSQ202406231', 'SDQ202406301', 'SIGN2105385546861');
INSERT INTO `box_wine` (`id`, `case_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_receipt_form`, `associated_outbound_order`, `associated_accept_receipt`, `associated_shipping_order`, `associated_sign_receipt`) VALUES (16, 'CASE003', '酿酒52%vol', '2024-06-20', '1*6*500ml', '优质高粱', 'SXRK24070114213801', 'DN2024062302', 'TSQ202406242', 'SDQ202406302', 'SIGN2105385546862');
INSERT INTO `box_wine` (`id`, `case_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_receipt_form`, `associated_outbound_order`, `associated_accept_receipt`, `associated_shipping_order`, `associated_sign_receipt`) VALUES (17, 'CASE004', '酿酒52%vol', '2024-06-20', '1*6*500ml', '优质高粱', 'SXRK24070114213801', 'DN2024062302', 'TSQ202406242', 'SDQ202406302', 'SIGN2105385546862');
INSERT INTO `box_wine` (`id`, `case_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_receipt_form`, `associated_outbound_order`, `associated_accept_receipt`, `associated_shipping_order`, `associated_sign_receipt`) VALUES (18, 'CASE005', '酿酒52%vol', '2024-06-20', '1*6*500ml', '优质高粱', 'SXRK24070114213801', 'DN2024062302', 'TSQ202406242', 'SDQ202406303', 'SIGN2105385546863');
INSERT INTO `box_wine` (`id`, `case_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_receipt_form`, `associated_outbound_order`, `associated_accept_receipt`, `associated_shipping_order`, `associated_sign_receipt`) VALUES (19, 'CASE006', '酿酒52%vol', '2024-06-21', '1*6*500ml', '优质高粱', 'SXRK24070114213802', 'DN2024062403', 'TSQ202406253', 'SDQ202406304', 'SIGN2105385546864');
INSERT INTO `box_wine` (`id`, `case_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_receipt_form`, `associated_outbound_order`, `associated_accept_receipt`, `associated_shipping_order`, `associated_sign_receipt`) VALUES (20, 'CASE007', '酿酒52%vol', '2024-06-21', '1*6*500ml', '优质高粱', 'SXRK24070114213802', 'DN2024062403', 'TSQ202406253', 'SDQ202406304', 'SIGN2105385546864');
INSERT INTO `box_wine` (`id`, `case_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_receipt_form`, `associated_outbound_order`, `associated_accept_receipt`, `associated_shipping_order`, `associated_sign_receipt`) VALUES (21, 'CASE008', '酿酒52%vol', '2024-06-21', '1*6*500ml', '优质高粱', 'SXRK24070114213802', 'DN2024062403', 'TSQ202406253', 'SDQ202406305', 'SIGN2105385546865');
INSERT INTO `box_wine` (`id`, `case_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_receipt_form`, `associated_outbound_order`, `associated_accept_receipt`, `associated_shipping_order`, `associated_sign_receipt`) VALUES (22, 'CASE009', '酿酒52%vol', '2024-06-21', '1*6*500ml', '优质高粱', 'SXRK24070114213802', 'DN2024062504', 'TSQ202406264', 'SDQ202406306', 'SIGN2105385546866');
INSERT INTO `box_wine` (`id`, `case_code`, `product`, `productive_time`, `specifications`, `raw_material`, `associated_receipt_form`, `associated_outbound_order`, `associated_accept_receipt`, `associated_shipping_order`, `associated_sign_receipt`) VALUES (23, 'CASE010', '酿酒52%vol', '2024-06-21', '1*6*500ml', '优质高粱', 'SXRK24070114213802', 'DN2024062504', 'TSQ202406264', 'SDQ202406307', 'SIGN2105385546867');
COMMIT;

-- ----------------------------
-- Table structure for box_wine_bottle_code
-- ----------------------------
DROP TABLE IF EXISTS `box_wine_bottle_code`;
CREATE TABLE `box_wine_bottle_code` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `case_code` varchar(255) DEFAULT NULL,
  `bottle_code` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of box_wine_bottle_code
-- ----------------------------
BEGIN;
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (1, 'CASE001', 'BTL001');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (2, 'CASE001', 'BTL002');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (3, 'CASE001', 'BTL003');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (4, 'CASE001', 'BTL004');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (5, 'CASE001', 'BTL005');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (6, 'CASE001', 'BTL006');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (7, 'CASE002', 'BTL007');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (8, 'CASE002', 'BTL008');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (9, 'CASE002', 'BTL009');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (10, 'CASE002', 'BTL010');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (11, 'CASE002', 'BTL011');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (12, 'CASE002', 'BTL012');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (13, 'CASE003', 'BTL013');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (14, 'CASE003', 'BTL014');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (15, 'CASE003', 'BTL015');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (16, 'CASE003', 'BTL016');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (17, 'CASE003', 'BTL017');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (18, 'CASE003', 'BTL018');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (19, 'CASE004', 'BTL019');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (20, 'CASE004', 'BTL020');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (21, 'CASE004', 'BTL021');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (22, 'CASE004', 'BTL022');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (23, 'CASE004', 'BTL023');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (24, 'CASE004', 'BTL024');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (25, 'CASE005', 'BTL025');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (26, 'CASE005', 'BTL026');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (27, 'CASE005', 'BTL027');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (28, 'CASE005', 'BTL028');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (29, 'CASE005', 'BTL029');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (30, 'CASE005', 'BTL030');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (31, 'CASE006', 'BTL031');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (32, 'CASE006', 'BTL032');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (33, 'CASE006', 'BTL033');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (34, 'CASE006', 'BTL034');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (35, 'CASE006', 'BTL035');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (36, 'CASE006', 'BTL036');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (37, 'CASE007', 'BTL037');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (38, 'CASE007', 'BTL038');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (39, 'CASE007', 'BTL039');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (40, 'CASE007', 'BTL040');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (41, 'CASE007', 'BTL041');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (42, 'CASE007', 'BTL042');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (43, 'CASE008', 'BTL043');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (44, 'CASE008', 'BTL044');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (45, 'CASE008', 'BTL045');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (46, 'CASE008', 'BTL046');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (47, 'CASE008', 'BTL047');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (48, 'CASE008', 'BTL048');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (49, 'CASE009', 'BTL049');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (50, 'CASE009', 'BTL050');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (51, 'CASE009', 'BTL051');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (52, 'CASE009', 'BTL052');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (53, 'CASE009', 'BTL053');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (54, 'CASE009', 'BTL054');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (55, 'CASE010', 'BTL055');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (56, 'CASE010', 'BTL056');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (57, 'CASE010', 'BTL057');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (58, 'CASE010', 'BTL058');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (59, 'CASE010', 'BTL059');
INSERT INTO `box_wine_bottle_code` (`id`, `case_code`, `bottle_code`) VALUES (60, 'CASE010', 'BTL060');
COMMIT;

-- ----------------------------
-- Table structure for brew
-- ----------------------------
DROP TABLE IF EXISTS `brew`;
CREATE TABLE `brew` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `brewing_batch` varchar(255) NOT NULL COMMENT '酿造批次',
  `date_of_manufacture` date NOT NULL COMMENT '生产日期',
  `production_of_raw_wine` varchar(255) NOT NULL COMMENT '原酒产量',
  `cellar_number` varchar(255) NOT NULL COMMENT '窖池编号',
  `original_liquor_grade` varchar(255) NOT NULL COMMENT '原酒等级',
  `grain_input` varchar(255) NOT NULL COMMENT '粮食投放量',
  `grain_loss` varchar(255) NOT NULL COMMENT '粮食损耗',
  `daqu_advertising_volume` varchar(255) NOT NULL COMMENT '大曲投放量',
  `associated_blending_batch` varchar(255) DEFAULT NULL COMMENT '关联勾兑批次',
  `related_koji_making_batches` varchar(255) DEFAULT NULL COMMENT '关联制曲批次',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `brewing_batch` (`brewing_batch`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COMMENT='酿造';

-- ----------------------------
-- Records of brew
-- ----------------------------
BEGIN;
INSERT INTO `brew` (`id`, `brewing_batch`, `date_of_manufacture`, `production_of_raw_wine`, `cellar_number`, `original_liquor_grade`, `grain_input`, `grain_loss`, `daqu_advertising_volume`, `associated_blending_batch`, `related_koji_making_batches`) VALUES (5, 'BRW001', '2024-06-10', '20L', '15', '一级', '210吨', '1.3吨', '30L', 'BLD001', 'QMB001');
INSERT INTO `brew` (`id`, `brewing_batch`, `date_of_manufacture`, `production_of_raw_wine`, `cellar_number`, `original_liquor_grade`, `grain_input`, `grain_loss`, `daqu_advertising_volume`, `associated_blending_batch`, `related_koji_making_batches`) VALUES (6, 'BRW002', '2024-06-12', '20L', '17', '一级', '220吨', '1.5吨', '35L', 'BLD002', 'QMB002');
COMMIT;

-- ----------------------------
-- Table structure for koji_making
-- ----------------------------
DROP TABLE IF EXISTS `koji_making`;
CREATE TABLE `koji_making` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `qu_making_batch` varchar(255) NOT NULL COMMENT '制曲批次',
  `date_of_manufacture` date NOT NULL COMMENT '生产日期',
  `leadership_team` varchar(255) NOT NULL COMMENT '领导班组',
  `yangqu_room_number` int(11) NOT NULL COMMENT '养曲房号',
  `daqu_level` varchar(255) NOT NULL COMMENT '大曲等级',
  `daqu_room_number` int(11) NOT NULL COMMENT '大曲房号',
  `total_beam_investment` varchar(255) NOT NULL COMMENT '投梁合计',
  `associated_brewing_batches` varchar(255) DEFAULT NULL COMMENT '关联酿造批次',
  `related_raw_material_batches` varchar(255) DEFAULT NULL COMMENT '关联原料批次',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `qu_making_batch` (`qu_making_batch`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COMMENT='制曲';

-- ----------------------------
-- Records of koji_making
-- ----------------------------
BEGIN;
INSERT INTO `koji_making` (`id`, `qu_making_batch`, `date_of_manufacture`, `leadership_team`, `yangqu_room_number`, `daqu_level`, `daqu_room_number`, `total_beam_investment`, `associated_brewing_batches`, `related_raw_material_batches`) VALUES (5, 'QMB001', '2024-05-29', '天翼包装车间一班', 3, '一级', 201, '235吨', 'BRW001', 'RMB001');
INSERT INTO `koji_making` (`id`, `qu_making_batch`, `date_of_manufacture`, `leadership_team`, `yangqu_room_number`, `daqu_level`, `daqu_room_number`, `total_beam_investment`, `associated_brewing_batches`, `related_raw_material_batches`) VALUES (6, 'QMB002', '2024-05-30', '天翼包装车间二班', 102, '二级', 202, '240吨', 'BRW002', 'RMB002');
COMMIT;

-- ----------------------------
-- Table structure for package
-- ----------------------------
DROP TABLE IF EXISTS `package`;
CREATE TABLE `package` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `packagin_batch` varchar(255) NOT NULL COMMENT '包装批次',
  `name_of_finished_liquor` varchar(255) NOT NULL COMMENT '成品酒名称',
  `date_of_manufacture` date NOT NULL COMMENT '生产日期',
  `team_name` varchar(255) NOT NULL COMMENT '班组名称',
  `specifications` varchar(255) NOT NULL COMMENT '规格',
  `quantity` varchar(255) NOT NULL COMMENT '生产数量',
  `empty_bottle_inspection` varchar(255) NOT NULL COMMENT '空瓶检',
  `blowing_cover` varchar(255) NOT NULL COMMENT '吹盖',
  `canning` varchar(255) NOT NULL COMMENT '罐装',
  `associated_blending_batch` varchar(255) DEFAULT NULL COMMENT '关联勾兑批次',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `packagin_batch` (`packagin_batch`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COMMENT='包装过程管控';

-- ----------------------------
-- Records of package
-- ----------------------------
BEGIN;
INSERT INTO `package` (`id`, `packagin_batch`, `name_of_finished_liquor`, `date_of_manufacture`, `team_name`, `specifications`, `quantity`, `empty_bottle_inspection`, `blowing_cover`, `canning`, `associated_blending_batch`) VALUES (7, 'PKG001', '成品白酒', '2024-06-20', '天翼包装车间二班', '500ml', '30箱', '魏改锋', '赵艳艳', '周妮妮', 'BLD001');
INSERT INTO `package` (`id`, `packagin_batch`, `name_of_finished_liquor`, `date_of_manufacture`, `team_name`, `specifications`, `quantity`, `empty_bottle_inspection`, `blowing_cover`, `canning`, `associated_blending_batch`) VALUES (8, 'PKG002', '成品白酒', '2024-06-21', '天翼包装车间一班', '500ml', '30箱', '王俊峰', '张娟', '魏成文', 'BLD002');
COMMIT;

-- ----------------------------
-- Table structure for package_bottle_code
-- ----------------------------
DROP TABLE IF EXISTS `package_bottle_code`;
CREATE TABLE `package_bottle_code` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `packagin_batch` varchar(255) DEFAULT NULL,
  `bottle_code` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of package_bottle_code
-- ----------------------------
BEGIN;
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (1, 'PKG001', 'BTL001');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (2, 'PKG001', 'BTL002');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (3, 'PKG001', 'BTL003');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (4, 'PKG001', 'BTL004');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (5, 'PKG001', 'BTL005');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (6, 'PKG001', 'BTL006');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (7, 'PKG001', 'BTL007');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (8, 'PKG001', 'BTL008');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (9, 'PKG001', 'BTL009');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (10, 'PKG001', 'BTL010');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (11, 'PKG001', 'BTL011');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (12, 'PKG001', 'BTL012');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (13, 'PKG001', 'BTL013');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (14, 'PKG001', 'BTL014');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (15, 'PKG001', 'BTL015');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (16, 'PKG001', 'BTL016');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (17, 'PKG001', 'BTL017');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (18, 'PKG001', 'BTL018');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (19, 'PKG001', 'BTL019');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (20, 'PKG001', 'BTL020');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (21, 'PKG001', 'BTL021');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (22, 'PKG001', 'BTL022');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (23, 'PKG001', 'BTL023');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (24, 'PKG001', 'BTL024');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (25, 'PKG001', 'BTL025');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (26, 'PKG001', 'BTL026');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (27, 'PKG001', 'BTL027');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (28, 'PKG001', 'BTL028');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (29, 'PKG001', 'BTL029');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (30, 'PKG001', 'BTL030');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (31, 'PKG002', 'BTL031');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (32, 'PKG002', 'BTL032');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (33, 'PKG002', 'BTL033');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (34, 'PKG002', 'BTL034');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (35, 'PKG002', 'BTL035');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (36, 'PKG002', 'BTL036');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (37, 'PKG002', 'BTL037');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (38, 'PKG002', 'BTL038');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (39, 'PKG002', 'BTL039');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (40, 'PKG002', 'BTL040');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (41, 'PKG002', 'BTL041');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (42, 'PKG002', 'BTL042');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (43, 'PKG002', 'BTL043');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (44, 'PKG002', 'BTL044');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (45, 'PKG002', 'BTL045');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (46, 'PKG002', 'BTL046');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (47, 'PKG002', 'BTL047');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (48, 'PKG002', 'BTL048');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (49, 'PKG002', 'BTL049');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (50, 'PKG002', 'BTL050');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (51, 'PKG002', 'BTL051');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (52, 'PKG002', 'BTL052');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (53, 'PKG002', 'BTL053');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (54, 'PKG002', 'BTL054');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (55, 'PKG002', 'BTL055');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (56, 'PKG002', 'BTL056');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (57, 'PKG002', 'BTL057');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (58, 'PKG002', 'BTL058');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (59, 'PKG002', 'BTL059');
INSERT INTO `package_bottle_code` (`id`, `packagin_batch`, `bottle_code`) VALUES (60, 'PKG002', 'BTL060');
COMMIT;

-- ----------------------------
-- Table structure for raw_material_batch
-- ----------------------------
DROP TABLE IF EXISTS `raw_material_batch`;
CREATE TABLE `raw_material_batch` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `raw_material_batch` varchar(255) NOT NULL COMMENT '原料批次',
  `purchase_order_number` varchar(255) NOT NULL COMMENT '采购单号',
  `type` varchar(255) NOT NULL COMMENT '物料名称',
  `storage_time` date NOT NULL COMMENT '入库时间',
  `receipt_batch` varchar(255) NOT NULL COMMENT '入库批次',
  `inventory_quantity` varchar(255) NOT NULL COMMENT '入库数量',
  `related_koji_making_batches` varchar(255) DEFAULT NULL COMMENT '关联制曲批次',
  `related_suppliers` varchar(255) DEFAULT NULL COMMENT '关联供应商',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `raw_material_batch` (`raw_material_batch`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COMMENT='原料批次';

-- ----------------------------
-- Records of raw_material_batch
-- ----------------------------
BEGIN;
INSERT INTO `raw_material_batch` (`id`, `raw_material_batch`, `purchase_order_number`, `type`, `storage_time`, `receipt_batch`, `inventory_quantity`, `related_koji_making_batches`, `related_suppliers`) VALUES (11, 'RMB001', 'PO001', '优质高粱', '2024-05-15', 'BATCH1', '235吨', 'QMB001', 'SUP001');
INSERT INTO `raw_material_batch` (`id`, `raw_material_batch`, `purchase_order_number`, `type`, `storage_time`, `receipt_batch`, `inventory_quantity`, `related_koji_making_batches`, `related_suppliers`) VALUES (12, 'RMB002', 'PO002', '优质高粱', '2024-05-18', 'BATCH2', '240吨', 'QMB002', 'SUP002');
COMMIT;

-- ----------------------------
-- Table structure for supplier
-- ----------------------------
DROP TABLE IF EXISTS `supplier`;
CREATE TABLE `supplier` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `supplier_no` varchar(255) NOT NULL COMMENT '供应商编号',
  `supplier_contact` varchar(255) NOT NULL COMMENT '供应商联系人',
  `supplier_phone` bigint(20) NOT NULL COMMENT '供应商电话',
  `address` varchar(255) NOT NULL COMMENT '地址',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `supplier_no` (`supplier_no`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COMMENT='供应商	';

-- ----------------------------
-- Records of supplier
-- ----------------------------
BEGIN;
INSERT INTO `supplier` (`id`, `supplier_no`, `supplier_contact`, `supplier_phone`, `address`) VALUES (6, 'SUP001', '张永强', 18628319283, '郑州市金水区');
COMMIT;

-- ----------------------------
-- Table structure for supplier_raw_material_batch
-- ----------------------------
DROP TABLE IF EXISTS `supplier_raw_material_batch`;
CREATE TABLE `supplier_raw_material_batch` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `supplier_no` varchar(255) DEFAULT NULL,
  `raw_material_batch` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of supplier_raw_material_batch
-- ----------------------------
BEGIN;
INSERT INTO `supplier_raw_material_batch` (`id`, `supplier_no`, `raw_material_batch`) VALUES (1, 'SUP001', 'RMB001');
INSERT INTO `supplier_raw_material_batch` (`id`, `supplier_no`, `raw_material_batch`) VALUES (2, 'SUP001', 'RMB002');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
