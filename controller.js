'use strict';


var response   = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi rest api ku berjalan",res)
};

// menampikan semua data mahasiswa
exports.tampilsemuamahasiswa = function(req,res){
    connection.query("SELECT * FROM mahasiswa", function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res)
        }        
    });
}
    // menampikan semua data mahasiswa berdasar id
    exports.tampilberdasarkanid = function(req,res){
        let id= req.params.id;
    connection.query("SELECT * FROM mahasiswa WHERE id_mahasiswa = ?",[id],
        function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res)
        }        
    });
    };

    // menambahkan data mahasiswa
    exports.tambahMahasiswa = function(req, res){
        var nim = req.body.nim;
        var nama = req.body.nama;
        var jurusan = req.body.jurusan;

        connection.query('INSERT INTO mahasiswa (nim,nama,jurusan) VALUES(?,?,?)',
        [nim,nama,jurusan],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok("berhasil menambahkan data",res)
            }
        });
    };

        // mengubah data berdasarkan id
        exports.ubahMahasiswa = function(req,res){
            var id = req.body.id_mahasiswa;
            var nim = req.body.nim;
            var nama = req.body.nama;
            var jurusan = req.body.jurusan;
            
        connection.query('UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?',[nim,nama,jurusan,id],
            function(error, rows, fields){
                if (error){
                    console.log(error);
                }else{
                    response.ok("berhasil ubah data",res)
                }
            });    
        }

        // menghapus data berdasarkan id
        exports.hapusMahasiswa= function(req,res){
            var id=req.body.id_mahasiswa;
            connection.query('DELETE FROM mahasiswa WHERE id_mahasiswa=?',[id],
                function(error, rows,fields){
                    if (error){
                        console.log(error);
                    }else{
                        response.ok("Berhasil Hapus Data", res)
                    }
                });
        }