/*
 Navicat Premium Data Transfer

 Source Server         : 10.14.152.165
 Source Server Type    : MySQL
 Source Server Version : 50736
 Source Host           : 10.14.152.165:3306
 Source Schema         : wine-store

 Target Server Type    : MySQL
 Target Server Version : 50736
 File Encoding         : 65001

 Date: 22/07/2024 15:03:00
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for dealer_shipment
-- ----------------------------
DROP TABLE IF EXISTS `dealer_shipment`;
CREATE TABLE `dealer_shipment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `delivery_note_number` varchar(255) NOT NULL COMMENT '发货单号',
  `dealer` varchar(255) NOT NULL COMMENT '经销商',
  `custom` varchar(255) NOT NULL COMMENT '客户',
  `store_code` varchar(255) NOT NULL COMMENT '门店编码',
  `delivery_date` date NOT NULL COMMENT '出库日期',
  `product` varchar(255) NOT NULL COMMENT '产品',
  `associated_receipt` varchar(255) DEFAULT NULL COMMENT '关联签收单',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `delivery_note_number` (`delivery_note_number`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COMMENT='经销商发货	';

-- ----------------------------
-- Records of dealer_shipment
-- ----------------------------
BEGIN;
INSERT INTO `dealer_shipment` (`id`, `delivery_note_number`, `dealer`, `custom`, `store_code`, `delivery_date`, `product`, `associated_receipt`) VALUES (5, 'SDQ202406301', '洛阳仓库', '超市勤政苑店', '14042512', '2024-07-01', '酿酒52%vol', 'SIGN2105385546861');
INSERT INTO `dealer_shipment` (`id`, `delivery_note_number`, `dealer`, `custom`, `store_code`, `delivery_date`, `product`, `associated_receipt`) VALUES (6, 'SDQ202406302', '洛阳仓库', '超市勤政苑店', '14042512', '2024-07-02', '酿酒52%vol', 'SIGN2105385546862');
INSERT INTO `dealer_shipment` (`id`, `delivery_note_number`, `dealer`, `custom`, `store_code`, `delivery_date`, `product`, `associated_receipt`) VALUES (7, 'SDQ202406303', '洛阳仓库', '超市勤政苑店', '14042512', '2024-07-03', '酿酒52%vol', 'SIGN2105385546863');
INSERT INTO `dealer_shipment` (`id`, `delivery_note_number`, `dealer`, `custom`, `store_code`, `delivery_date`, `product`, `associated_receipt`) VALUES (8, 'SDQ202406304', '洛阳仓库', '超市勤政苑店', '14042512', '2024-07-04', '酿酒52%vol', 'SIGN2105385546864');
INSERT INTO `dealer_shipment` (`id`, `delivery_note_number`, `dealer`, `custom`, `store_code`, `delivery_date`, `product`, `associated_receipt`) VALUES (9, 'SDQ202406305', '洛阳仓库', '超市勤政苑店', '14042512', '2024-07-05', '酿酒52%vol', 'SIGN2105385546865');
INSERT INTO `dealer_shipment` (`id`, `delivery_note_number`, `dealer`, `custom`, `store_code`, `delivery_date`, `product`, `associated_receipt`) VALUES (10, 'SDQ202406306', '洛阳仓库', '超市勤政苑店', '14042512', '2024-07-06', '酿酒52%vol', 'SIGN2105385546866');
INSERT INTO `dealer_shipment` (`id`, `delivery_note_number`, `dealer`, `custom`, `store_code`, `delivery_date`, `product`, `associated_receipt`) VALUES (11, 'SDQ202406307', '洛阳仓库', '超市勤政苑店', '14042512', '2024-07-07', '酿酒52%vol', 'SIGN2105385546867');
COMMIT;

-- ----------------------------
-- Table structure for dealer_shipment_box_code
-- ----------------------------
DROP TABLE IF EXISTS `dealer_shipment_box_code`;
CREATE TABLE `dealer_shipment_box_code` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `delivery_note_number` varchar(255) DEFAULT NULL,
  `box_code` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of dealer_shipment_box_code
-- ----------------------------
BEGIN;
INSERT INTO `dealer_shipment_box_code` (`id`, `delivery_note_number`, `box_code`) VALUES (11, 'SDQ202406301', 'CASE001');
INSERT INTO `dealer_shipment_box_code` (`id`, `delivery_note_number`, `box_code`) VALUES (12, 'SDQ202406301', 'CASE002');
INSERT INTO `dealer_shipment_box_code` (`id`, `delivery_note_number`, `box_code`) VALUES (13, 'SDQ202406302', 'CASE003');
INSERT INTO `dealer_shipment_box_code` (`id`, `delivery_note_number`, `box_code`) VALUES (14, 'SDQ202406302', 'CASE004');
INSERT INTO `dealer_shipment_box_code` (`id`, `delivery_note_number`, `box_code`) VALUES (15, 'SDQ202406303', 'CASE005');
INSERT INTO `dealer_shipment_box_code` (`id`, `delivery_note_number`, `box_code`) VALUES (16, 'SDQ202406304', 'CASE006');
INSERT INTO `dealer_shipment_box_code` (`id`, `delivery_note_number`, `box_code`) VALUES (17, 'SDQ202406304', 'CASE007');
INSERT INTO `dealer_shipment_box_code` (`id`, `delivery_note_number`, `box_code`) VALUES (18, 'SDQ202406305', 'CASE008');
INSERT INTO `dealer_shipment_box_code` (`id`, `delivery_note_number`, `box_code`) VALUES (19, 'SDQ202406306', 'CASE009');
INSERT INTO `dealer_shipment_box_code` (`id`, `delivery_note_number`, `box_code`) VALUES (20, 'SDQ202406307', 'CASE010');
COMMIT;

-- ----------------------------
-- Table structure for outbound_order
-- ----------------------------
DROP TABLE IF EXISTS `outbound_order`;
CREATE TABLE `outbound_order` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `delivery_note_number` varchar(255) NOT NULL COMMENT '出库单号',
  `warehouse` varchar(255) NOT NULL COMMENT '仓库',
  `custom` varchar(255) NOT NULL COMMENT '客户',
  `store_code` varchar(255) NOT NULL COMMENT '门店编码',
  `delivery_date` date NOT NULL COMMENT '出库日期',
  `reviewer` varchar(255) NOT NULL COMMENT '审核人',
  `approved_date` date NOT NULL COMMENT '审核日期',
  `product` varchar(255) NOT NULL COMMENT '产品',
  `associateda_receipt_number` varchar(255) DEFAULT NULL COMMENT '关联收货单号',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `delivery_note_number` (`delivery_note_number`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COMMENT='销售出库';

-- ----------------------------
-- Records of outbound_order
-- ----------------------------
BEGIN;
INSERT INTO `outbound_order` (`id`, `delivery_note_number`, `warehouse`, `custom`, `store_code`, `delivery_date`, `reviewer`, `approved_date`, `product`, `associateda_receipt_number`) VALUES (5, 'DN2024062201', '天翼酒厂成品库', '洛阳仓库', '14542512', '2024-06-22', '张伟', '2024-06-28', '酿酒52%vol', 'TSQ202406231');
INSERT INTO `outbound_order` (`id`, `delivery_note_number`, `warehouse`, `custom`, `store_code`, `delivery_date`, `reviewer`, `approved_date`, `product`, `associateda_receipt_number`) VALUES (6, 'DN2024062302', '天翼酒厂成品库', '洛阳仓库', '14542512', '2024-06-23', '张伟', '2024-06-28', '酿酒52%vol', 'TSQ202406242');
INSERT INTO `outbound_order` (`id`, `delivery_note_number`, `warehouse`, `custom`, `store_code`, `delivery_date`, `reviewer`, `approved_date`, `product`, `associateda_receipt_number`) VALUES (7, 'DN2024062403', '天翼酒厂成品库', '洛阳仓库', '14542512', '2024-06-24', '张伟', '2024-06-28', '酿酒52%vol', 'TSQ202406253');
INSERT INTO `outbound_order` (`id`, `delivery_note_number`, `warehouse`, `custom`, `store_code`, `delivery_date`, `reviewer`, `approved_date`, `product`, `associateda_receipt_number`) VALUES (8, 'DN2024062504', '天翼酒厂成品库', '洛阳仓库', '14542512', '2024-06-25', '张伟', '2024-06-28', '酿酒52%vol', 'TSQ202406264');
COMMIT;

-- ----------------------------
-- Table structure for outbound_order_box_code
-- ----------------------------
DROP TABLE IF EXISTS `outbound_order_box_code`;
CREATE TABLE `outbound_order_box_code` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `delivery_note_number` varchar(255) DEFAULT NULL,
  `box_code` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of outbound_order_box_code
-- ----------------------------
BEGIN;
INSERT INTO `outbound_order_box_code` (`id`, `delivery_note_number`, `box_code`) VALUES (11, 'DN2024062201', 'CASE001');
INSERT INTO `outbound_order_box_code` (`id`, `delivery_note_number`, `box_code`) VALUES (12, 'DN2024062201', 'CASE002');
INSERT INTO `outbound_order_box_code` (`id`, `delivery_note_number`, `box_code`) VALUES (13, 'DN2024062302', 'CASE003');
INSERT INTO `outbound_order_box_code` (`id`, `delivery_note_number`, `box_code`) VALUES (14, 'DN2024062302', 'CASE004');
INSERT INTO `outbound_order_box_code` (`id`, `delivery_note_number`, `box_code`) VALUES (15, 'DN2024062302', 'CASE005');
INSERT INTO `outbound_order_box_code` (`id`, `delivery_note_number`, `box_code`) VALUES (16, 'DN2024062403', 'CASE006');
INSERT INTO `outbound_order_box_code` (`id`, `delivery_note_number`, `box_code`) VALUES (17, 'DN2024062403', 'CASE007');
INSERT INTO `outbound_order_box_code` (`id`, `delivery_note_number`, `box_code`) VALUES (18, 'DN2024062403', 'CASE008');
INSERT INTO `outbound_order_box_code` (`id`, `delivery_note_number`, `box_code`) VALUES (19, 'DN2024062504', 'CASE009');
INSERT INTO `outbound_order_box_code` (`id`, `delivery_note_number`, `box_code`) VALUES (20, 'DN2024062504', 'CASE010');
COMMIT;

-- ----------------------------
-- Table structure for production_warehousing
-- ----------------------------
DROP TABLE IF EXISTS `production_warehousing`;
CREATE TABLE `production_warehousing` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `warehouse_entry_number` varchar(255) NOT NULL COMMENT '入库单号',
  `production_line` varchar(255) NOT NULL COMMENT '产线',
  `warehouse` varchar(255) NOT NULL COMMENT '仓库',
  `factory` varchar(255) NOT NULL COMMENT '工厂',
  `product` varchar(255) NOT NULL COMMENT '产品',
  `quantity` varchar(255) NOT NULL COMMENT '生产数量',
  `productive_time` date NOT NULL COMMENT '生产时间',
  `production_batch` varchar(255) NOT NULL COMMENT '生产批次',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `warehouse_entry_number` (`warehouse_entry_number`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COMMENT='生产入库';

-- ----------------------------
-- Records of production_warehousing
-- ----------------------------
BEGIN;
INSERT INTO `production_warehousing` (`id`, `warehouse_entry_number`, `production_line`, `warehouse`, `factory`, `product`, `quantity`, `productive_time`, `production_batch`) VALUES (5, 'SXRK24070114213801', '天翼包装车间北线', '天翼酒厂成品库', '天翼有限公司', '酿酒52%vol', '5箱', '2024-06-20', 'BATCH001');
INSERT INTO `production_warehousing` (`id`, `warehouse_entry_number`, `production_line`, `warehouse`, `factory`, `product`, `quantity`, `productive_time`, `production_batch`) VALUES (6, 'SXRK24070114213802', '天翼包装车间南线', '天翼酒厂成品库', '天翼有限公司', '酿酒52%vol', '5箱', '2024-06-21', 'BATCH002');
COMMIT;

-- ----------------------------
-- Table structure for production_warehousing_box_code
-- ----------------------------
DROP TABLE IF EXISTS `production_warehousing_box_code`;
CREATE TABLE `production_warehousing_box_code` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `warehouse_entry_number` varchar(255) DEFAULT NULL,
  `box_code` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of production_warehousing_box_code
-- ----------------------------
BEGIN;
INSERT INTO `production_warehousing_box_code` (`id`, `warehouse_entry_number`, `box_code`) VALUES (1, 'SXRK24070114213801', 'CASE001');
INSERT INTO `production_warehousing_box_code` (`id`, `warehouse_entry_number`, `box_code`) VALUES (2, 'SXRK24070114213801', 'CASE002');
INSERT INTO `production_warehousing_box_code` (`id`, `warehouse_entry_number`, `box_code`) VALUES (3, 'SXRK24070114213801', 'CASE003');
INSERT INTO `production_warehousing_box_code` (`id`, `warehouse_entry_number`, `box_code`) VALUES (4, 'SXRK24070114213801', 'CASE004');
INSERT INTO `production_warehousing_box_code` (`id`, `warehouse_entry_number`, `box_code`) VALUES (5, 'SXRK24070114213801', 'CASE005');
INSERT INTO `production_warehousing_box_code` (`id`, `warehouse_entry_number`, `box_code`) VALUES (6, 'SXRK24070114213802', 'CASE006');
INSERT INTO `production_warehousing_box_code` (`id`, `warehouse_entry_number`, `box_code`) VALUES (7, 'SXRK24070114213802', 'CASE007');
INSERT INTO `production_warehousing_box_code` (`id`, `warehouse_entry_number`, `box_code`) VALUES (8, 'SXRK24070114213802', 'CASE008');
INSERT INTO `production_warehousing_box_code` (`id`, `warehouse_entry_number`, `box_code`) VALUES (9, 'SXRK24070114213802', 'CASE009');
INSERT INTO `production_warehousing_box_code` (`id`, `warehouse_entry_number`, `box_code`) VALUES (10, 'SXRK24070114213802', 'CASE010');
COMMIT;

-- ----------------------------
-- Table structure for receipt
-- ----------------------------
DROP TABLE IF EXISTS `receipt`;
CREATE TABLE `receipt` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `receipt_number` varchar(255) NOT NULL COMMENT '收货单号',
  `warehouse` varchar(255) NOT NULL COMMENT '仓库',
  `custom` varchar(255) NOT NULL COMMENT '客户',
  `store_code` varchar(255) NOT NULL COMMENT '门店编码',
  `receiving_date` date NOT NULL COMMENT '收货日期',
  `reviewer` varchar(255) NOT NULL COMMENT '审核人',
  `approved_date` date NOT NULL COMMENT '审核日期',
  `product` varchar(255) NOT NULL COMMENT '产品',
  `associated_box_code` varchar(255) DEFAULT NULL COMMENT '关联箱码',
  `associated_outbound_order` varchar(255) DEFAULT NULL COMMENT '关联出库单',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `receipt_number` (`receipt_number`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COMMENT='经销商收货';

-- ----------------------------
-- Records of receipt
-- ----------------------------
BEGIN;
INSERT INTO `receipt` (`id`, `receipt_number`, `warehouse`, `custom`, `store_code`, `receiving_date`, `reviewer`, `approved_date`, `product`, `associated_box_code`, `associated_outbound_order`) VALUES (5, 'TSQ202406231', '天翼酒厂成品库', '洛阳仓库', '14542512', '2024-06-23', '王汝阳', '2024-06-29', '酿酒52%vol', NULL, 'DN2024062201');
INSERT INTO `receipt` (`id`, `receipt_number`, `warehouse`, `custom`, `store_code`, `receiving_date`, `reviewer`, `approved_date`, `product`, `associated_box_code`, `associated_outbound_order`) VALUES (6, 'TSQ202406242', '天翼酒厂成品库', '洛阳仓库', '14542512', '2024-06-24', '王汝阳', '2024-06-29', '酿酒52%vol', NULL, 'DN2024062302');
INSERT INTO `receipt` (`id`, `receipt_number`, `warehouse`, `custom`, `store_code`, `receiving_date`, `reviewer`, `approved_date`, `product`, `associated_box_code`, `associated_outbound_order`) VALUES (7, 'TSQ202406253', '天翼酒厂成品库', '洛阳仓库', '14542512', '2024-06-25', '王汝阳', '2024-06-29', '酿酒52%vol', NULL, 'DN2024062403');
INSERT INTO `receipt` (`id`, `receipt_number`, `warehouse`, `custom`, `store_code`, `receiving_date`, `reviewer`, `approved_date`, `product`, `associated_box_code`, `associated_outbound_order`) VALUES (8, 'TSQ202406264', '天翼酒厂成品库', '洛阳仓库', '14542512', '2024-06-26', '王汝阳', '2024-06-29', '酿酒52%vol', NULL, 'DN2024062504');
COMMIT;

-- ----------------------------
-- Table structure for receipt_box_code
-- ----------------------------
DROP TABLE IF EXISTS `receipt_box_code`;
CREATE TABLE `receipt_box_code` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `receipt_number` varchar(255) DEFAULT NULL,
  `box_code` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of receipt_box_code
-- ----------------------------
BEGIN;
INSERT INTO `receipt_box_code` (`id`, `receipt_number`, `box_code`) VALUES (1, 'TSQ202406231', 'CASE001');
INSERT INTO `receipt_box_code` (`id`, `receipt_number`, `box_code`) VALUES (2, 'TSQ202406231', 'CASE002');
INSERT INTO `receipt_box_code` (`id`, `receipt_number`, `box_code`) VALUES (3, 'TSQ202406242', 'CASE003');
INSERT INTO `receipt_box_code` (`id`, `receipt_number`, `box_code`) VALUES (4, 'TSQ202406242', 'CASE004');
INSERT INTO `receipt_box_code` (`id`, `receipt_number`, `box_code`) VALUES (5, 'TSQ202406242', 'CASE005');
INSERT INTO `receipt_box_code` (`id`, `receipt_number`, `box_code`) VALUES (6, 'TSQ202406253', 'CASE006');
INSERT INTO `receipt_box_code` (`id`, `receipt_number`, `box_code`) VALUES (7, 'TSQ202406253', 'CASE007');
INSERT INTO `receipt_box_code` (`id`, `receipt_number`, `box_code`) VALUES (8, 'TSQ202406253', 'CASE008');
INSERT INTO `receipt_box_code` (`id`, `receipt_number`, `box_code`) VALUES (9, 'TSQ202406264', 'CASE009');
INSERT INTO `receipt_box_code` (`id`, `receipt_number`, `box_code`) VALUES (10, 'TSQ202406264', 'CASE0010');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
