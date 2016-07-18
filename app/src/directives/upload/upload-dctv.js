angular.module(MODULES.DIRECTIVES.UPLOAD, [
    MODULES.THIRD_PARTY.NG_FILE_UPLOAD
])
    .directive('uploadDctv', function (CONFIG, Upload) {


        return {
            scope:{
                model: '='
            },
            templateUrl: 'src/directives/upload/upload-tpl.html',
            link: function (scope, el, attr, ctrl) {

                scope.$watch('file', function (newVal) {

                    if (newVal) {
                        Upload
                            .upload({
                                url: CONFIG.API_PREFIX + 'file.php',
                                file: newVal
                            })
                            .progress(function (evt) {
                                scope.progress = (evt.loaded / evt.total * 100).toFixed();
                                console.log('progress: ' + scope.percent + '% file :' + evt.config.file.name);
                            })
                            .success(function (data, status, headers, config) {
                                console.log('file ' + config.file + 'is uploaded successfully. Response: ' + data);
                                scope.model = data.file;
                            });
                    }
                    
                });

            }
        };

    });