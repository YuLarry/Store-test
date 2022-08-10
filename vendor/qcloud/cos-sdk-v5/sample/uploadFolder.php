<?php

require dirname( __FILE__ ) . '/../vendor/autoload.php';

$secretId = "SECRETID"; //替换为用户的 secretId，请登录访问管理控制台进行查看和管理，https://console.cloud.tencent.com/cam/capi
$secretKey = "SECRETKEY"; //替换为用户的 secretKey，请登录访问管理控制台进行查看和管理，https://console.cloud.tencent.com/cam/capi
$region = "ap-beijing"; //替换为用户的 region，已创建桶归属的region可以在控制台查看，https://console.cloud.tencent.com/cos5/bucket
$cosClient = new Qcloud\Cos\Client(
    array(
        'region' => $region,
        'schema' => 'https', //协议头部，默认为http
        'credentials'=> array(
            'secretId'  => $secretId ,
            'secretKey' => $secretKey
        )
    )
);

function uploadfiles( $path, $cosClient ) {
    foreach ( scandir( $path ) as $afile ) {
        if ( $afile == '.' || $afile == '..' ) continue;
        if ( is_dir( $path.'/'.$afile ) ) {
            uploadfiles( $path.'/'.$afile, $cosClient );
        } else {
            $local_file_path = $path.'/'.$afile;
            $cos_file_path = $local_file_path;
            // 按照需求自定义拼接上传路径
            try {
                $cosClient->upload(
                    $bucket = 'examplebucket-125000000', //存储桶名称，由BucketName-Appid 组成，可以在COS控制台查看 https://console.cloud.tencent.com/cos5/bucket
                    $key = $cos_file_path,
                    $body = fopen( $cos_file_path, 'rb' )
                );
            } catch ( \Exception $e ) {
                echo( $e );
            }
        }
    }
}

$local_path = '/data/home/folder';
uploadfiles( $local_path, $cosClient );
