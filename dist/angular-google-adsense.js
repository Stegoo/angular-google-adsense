(function () {

    'use strict';

    angular.module('angular-google-adsense', []).

    service('Adsense', [function(){
        this.url = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        this.isAlreadyLoaded = false;
    }]).

    directive('adsense', function () {
        return {
            restrict: 'E',
            replace: true,
            scope : {
              adClient : '@',
              adSlot : '@',
              adFormat : '@',
              adLayout: '@',
              adLayoutKey: '@',
              inlineStyle : '@',
              viewportMinWidth: '@',
              viewportMaxWidth: '@'
            },
            template: '<div data-ng-show="adFitInViewport" class="ads">'
              + '<ins data-ng-class="{\'adsbygoogle\': adFitInViewport}" '
              + 'data-ad-client="{{adClient}}" '
              + 'data-ad-slot="{{adSlot}}" '
              + 'ng-attr-data-ad-format="{{adFormat || undefined}}" '
              + 'ng-attr-data-ad-layout="{{adLayout || undefined}}" '
              + 'ng-attr-data-ad-layout-key="{{adLayoutKey || undefined}}" '
              + 'style="{{inlineStyle}}" '
              + '"></ins></div>',
            controller: ['Adsense', '$scope', '$window', '$timeout', function (Adsense, $scope, $window, $timeout) {

                $scope.adFitInViewport = true;
                if(($scope.viewportMinWidth && $window.innerWidth < $scope.viewportMinWidth) ||
                  ($scope.viewportMaxWidth && $window.innerWidth > $scope.viewportMaxWidth)) {
                    $scope.adFitInViewport = false;
                    return;
                }

                if (!Adsense.isAlreadyLoaded) {
                    var s = document.createElement('script');
                    s.type = 'text/javascript';
                    s.src = Adsense.url;
                    s.async = true;
                    document.body.appendChild(s);

                    Adsense.isAlreadyLoaded = true;
                }
                /**
                 * We need to wrap the call the AdSense in a $apply to update the bindings.
                 * Otherwise, we get a 400 error because AdSense gets literal strings from the directive
                 */
                $timeout(function(){
                     (window.adsbygoogle = window.adsbygoogle || []).push({});
                });
            }]
        };
    });
}());
