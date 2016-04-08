'use strict';var lang_1 = require('angular2/src/facade/lang');
var exceptions_1 = require('angular2/src/facade/exceptions');
var ReflectionCapabilities = (function () {
    function ReflectionCapabilities(reflect) {
        this._reflect = lang_1.isPresent(reflect) ? reflect : lang_1.global.Reflect;
    }
    ReflectionCapabilities.prototype.isReflectionEnabled = function () { return true; };
    ReflectionCapabilities.prototype.factory = function (t) {
        switch (t.length) {
            case 0:
                return function () { return new t(); };
            case 1:
                return function (a1) { return new t(a1); };
            case 2:
                return function (a1, a2) { return new t(a1, a2); };
            case 3:
                return function (a1, a2, a3) { return new t(a1, a2, a3); };
            case 4:
                return function (a1, a2, a3, a4) { return new t(a1, a2, a3, a4); };
            case 5:
                return function (a1, a2, a3, a4, a5) { return new t(a1, a2, a3, a4, a5); };
            case 6:
                return function (a1, a2, a3, a4, a5, a6) {
                    return new t(a1, a2, a3, a4, a5, a6);
                };
            case 7:
                return function (a1, a2, a3, a4, a5, a6, a7) {
                    return new t(a1, a2, a3, a4, a5, a6, a7);
                };
            case 8:
                return function (a1, a2, a3, a4, a5, a6, a7, a8) {
                    return new t(a1, a2, a3, a4, a5, a6, a7, a8);
                };
            case 9:
                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9) {
                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9);
                };
            case 10:
                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
                };
            case 11:
                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
                };
            case 12:
                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
                };
            case 13:
                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) {
                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13);
                };
            case 14:
                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14) {
                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14);
                };
            case 15:
                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) {
                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15);
                };
            case 16:
                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16) {
                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16);
                };
            case 17:
                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17) {
                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17);
                };
            case 18:
                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18) {
                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18);
                };
            case 19:
                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19) {
                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19);
                };
            case 20:
                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20) {
                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20);
                };
        }
        ;
        throw new Error("Cannot create a factory for '" + lang_1.stringify(t) + "' because its constructor has more than 20 arguments");
    };
    /** @internal */
    ReflectionCapabilities.prototype._zipTypesAndAnnotations = function (paramTypes, paramAnnotations) {
        var result;
        if (typeof paramTypes === 'undefined') {
            result = new Array(paramAnnotations.length);
        }
        else {
            result = new Array(paramTypes.length);
        }
        for (var i = 0; i < result.length; i++) {
            // TS outputs Object for parameters without types, while Traceur omits
            // the annotations. For now we preserve the Traceur behavior to aid
            // migration, but this can be revisited.
            if (typeof paramTypes === 'undefined') {
                result[i] = [];
            }
            else if (paramTypes[i] != Object) {
                result[i] = [paramTypes[i]];
            }
            else {
                result[i] = [];
            }
            if (lang_1.isPresent(paramAnnotations) && lang_1.isPresent(paramAnnotations[i])) {
                result[i] = result[i].concat(paramAnnotations[i]);
            }
        }
        return result;
    };
    ReflectionCapabilities.prototype.parameters = function (typeOrFunc) {
        // Prefer the direct API.
        if (lang_1.isPresent(typeOrFunc.parameters)) {
            return typeOrFunc.parameters;
        }
        if (lang_1.isPresent(this._reflect) && lang_1.isPresent(this._reflect.getMetadata)) {
            var paramAnnotations = this._reflect.getMetadata('parameters', typeOrFunc);
            var paramTypes = this._reflect.getMetadata('design:paramtypes', typeOrFunc);
            if (lang_1.isPresent(paramTypes) || lang_1.isPresent(paramAnnotations)) {
                return this._zipTypesAndAnnotations(paramTypes, paramAnnotations);
            }
        }
        // The array has to be filled with `undefined` because holes would be skipped by `some`
        var parameters = new Array(typeOrFunc.length);
        parameters.fill(undefined);
        return parameters;
    };
    ReflectionCapabilities.prototype.annotations = function (typeOrFunc) {
        // Prefer the direct API.
        if (lang_1.isPresent(typeOrFunc.annotations)) {
            var annotations = typeOrFunc.annotations;
            if (lang_1.isFunction(annotations) && annotations.annotations) {
                annotations = annotations.annotations;
            }
            return annotations;
        }
        if (lang_1.isPresent(this._reflect) && lang_1.isPresent(this._reflect.getMetadata)) {
            var annotations = this._reflect.getMetadata('annotations', typeOrFunc);
            if (lang_1.isPresent(annotations))
                return annotations;
        }
        return [];
    };
    ReflectionCapabilities.prototype.propMetadata = function (typeOrFunc) {
        // Prefer the direct API.
        if (lang_1.isPresent(typeOrFunc.propMetadata)) {
            var propMetadata = typeOrFunc.propMetadata;
            if (lang_1.isFunction(propMetadata) && propMetadata.propMetadata) {
                propMetadata = propMetadata.propMetadata;
            }
            return propMetadata;
        }
        if (lang_1.isPresent(this._reflect) && lang_1.isPresent(this._reflect.getMetadata)) {
            var propMetadata = this._reflect.getMetadata('propMetadata', typeOrFunc);
            if (lang_1.isPresent(propMetadata))
                return propMetadata;
        }
        return {};
    };
    ReflectionCapabilities.prototype.interfaces = function (type) {
        throw new exceptions_1.BaseException("JavaScript does not support interfaces");
    };
    ReflectionCapabilities.prototype.getter = function (name) { return new Function('o', 'return o.' + name + ';'); };
    ReflectionCapabilities.prototype.setter = function (name) {
        return new Function('o', 'v', 'return o.' + name + ' = v;');
    };
    ReflectionCapabilities.prototype.method = function (name) {
        var functionBody = "if (!o." + name + ") throw new Error('\"" + name + "\" is undefined');\n        return o." + name + ".apply(o, args);";
        return new Function('o', 'args', functionBody);
    };
    // There is not a concept of import uri in Js, but this is useful in developing Dart applications.
    ReflectionCapabilities.prototype.importUri = function (type) { return './'; };
    return ReflectionCapabilities;
})();
exports.ReflectionCapabilities = ReflectionCapabilities;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmbGVjdGlvbl9jYXBhYmlsaXRpZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLVNSVU9Hb1lXLnRtcC9hbmd1bGFyMi9zcmMvY29yZS9yZWZsZWN0aW9uL3JlZmxlY3Rpb25fY2FwYWJpbGl0aWVzLnRzIl0sIm5hbWVzIjpbIlJlZmxlY3Rpb25DYXBhYmlsaXRpZXMiLCJSZWZsZWN0aW9uQ2FwYWJpbGl0aWVzLmNvbnN0cnVjdG9yIiwiUmVmbGVjdGlvbkNhcGFiaWxpdGllcy5pc1JlZmxlY3Rpb25FbmFibGVkIiwiUmVmbGVjdGlvbkNhcGFiaWxpdGllcy5mYWN0b3J5IiwiUmVmbGVjdGlvbkNhcGFiaWxpdGllcy5femlwVHlwZXNBbmRBbm5vdGF0aW9ucyIsIlJlZmxlY3Rpb25DYXBhYmlsaXRpZXMucGFyYW1ldGVycyIsIlJlZmxlY3Rpb25DYXBhYmlsaXRpZXMuYW5ub3RhdGlvbnMiLCJSZWZsZWN0aW9uQ2FwYWJpbGl0aWVzLnByb3BNZXRhZGF0YSIsIlJlZmxlY3Rpb25DYXBhYmlsaXRpZXMuaW50ZXJmYWNlcyIsIlJlZmxlY3Rpb25DYXBhYmlsaXRpZXMuZ2V0dGVyIiwiUmVmbGVjdGlvbkNhcGFiaWxpdGllcy5zZXR0ZXIiLCJSZWZsZWN0aW9uQ2FwYWJpbGl0aWVzLm1ldGhvZCIsIlJlZmxlY3Rpb25DYXBhYmlsaXRpZXMuaW1wb3J0VXJpIl0sIm1hcHBpbmdzIjoiQUFBQSxxQkFPTywwQkFBMEIsQ0FBQyxDQUFBO0FBQ2xDLDJCQUE0QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBSTdEO0lBR0VBLGdDQUFZQSxPQUFhQTtRQUFJQyxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxnQkFBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsT0FBT0EsR0FBR0EsYUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7SUFBQ0EsQ0FBQ0E7SUFFN0ZELG9EQUFtQkEsR0FBbkJBLGNBQWlDRSxNQUFNQSxD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LFVBQUNBLEVBQU9BLEVBQUVBLEVBQU9BLEVBQUVBLEVBQU9BLEVBQUVBLEVBQU9BLEVBQUVBLEVBQU9BLEVBQUVBLEVBQU9BLEVBQUVBLEVBQU9BLEVBQUVBLEVBQU9BLEVBQUVBLEVBQU9BOzJCQUM1RUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsQ0FBQ0E7Z0JBQXpDQSxDQUF5Q0EsQ0FBQ0E7WUFDdkRBLEtBQUtBLEVBQUVBO2dCQUNMQSxNQUFNQSxDQUFDQSxVQUFDQSxFQUFPQSxFQUFFQSxFQUFPQSxFQUFFQSxFQUFPQSxFQUFFQSxFQUFPQSxFQUFFQSxFQUFPQSxFQUFFQSxFQUFPQSxFQUFFQSxFQUFPQSxFQUFFQSxFQUFPQSxFQUFFQSxFQUFPQSxFQUMvRUEsR0FBUUE7MkJBQUtBLElBQUlBLENBQUNBLENBQUNBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEdBQUdBLENBQUNBO2dCQUE5Q0EsQ0FBOENBLENBQUNBO1lBQ3RFQSxLQUFLQSxFQUFFQTtnQkFDTEEsTUFBTUEsQ0FBQ0EsVUFBQ0EsRUFBT0EsRUFBRUEsRUFBT0EsRUFBRUEsRUFBT0EsRUFBRUEsRUFBT0EsRUFBRUEsRUFBT0EsRUFBRUEsRUFBT0EsRUFBRUEsRUFBT0EsRUFBRUEsRUFBT0EsRUFBRUEsRUFBT0EsRUFDL0VBLEdBQVFBLEVBQUVBLEdBQVFBOzJCQUFLQSxJQUFJQSxDQUFDQSxDQUFDQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxDQUFDQTtnQkFBbkRBLENBQW1EQSxDQUFDQTtZQUNyRkEsS0FBS0EsRUFBRUE7Z0JBQ0xBLE1BQU1BLENBQUNBLFVBQUNBLEVBQU9BLEVBQUVBLEVBQU9BLEVBQUVBLEVBQU9BLEVBQUVBLEVBQU9BLEVBQUVBLEVBQU9BLEVBQUVBLEVBQU9BLEVBQUVBLEVBQU9BLEVBQUVBLEVBQU9BLEVBQUVBLEVBQU9BLEVBQy9FQSxHQUFRQSxFQUFFQSxHQUFRQSxFQUFFQSxHQUFRQTsyQkFDekJBLElBQUlBLENBQUNBLENBQUNBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLENBQUNBO2dCQUF4REEsQ0FBd0RBLENBQUNBO1lBQ3RFQSxLQUFLQSxFQUFFQTtnQkFDTEEsTUFBTUEsQ0FBQ0EsVUFBQ0EsRUFBT0EsRUFBRUEsRUFBT0EsRUFBRUEsRUFBT0EsRUFBRUEsRUFBT0EsRUFBRUEsRUFBT0EsRUFBRUEsRUFBT0EsRUFBRUEsRUFBT0EsRUFBRUEsRUFBT0EsRUFBRUEsRUFBT0EsRUFDL0VBLEdBQVFBLEVBQUVBLEdBQVFBLEVBQUVBLEdBQVFBLEVBQUVBLEdBQVFBOzJCQUNuQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0E7Z0JBQTdEQSxDQUE2REEsQ0FBQ0E7WUFDM0VBLEtBQUtBLEVBQUVBO2dCQUNMQSxNQUFNQSxDQUFDQSxVQUFDQSxFQUFPQSxFQUFFQSxFQUFPQSxFQUFFQSxFQUFPQSxFQUFFQSxFQUFPQSxFQUFFQSxFQUFPQSxFQUFFQSxFQUFPQSxFQUFFQSxFQUFPQSxFQUFFQSxFQUFPQSxFQUFFQSxFQUFPQSxFQUMvRUEsR0FBUUEsRUFBRUEsR0FBUUEsRUFBRUEsR0FBUUEsRUFBRUEsR0FBUUEsRUFBRUEsR0FBUUE7MkJBQzdDQSxJQUFJQSxDQUFDQSxDQUFDQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxDQUFDQTtnQkFBbEVBLENBQWtFQSxDQUFDQTtZQUNoRkEsS0FBS0EsRUFBRUE7Z0JBQ0xBLE1BQU1BLENBQUNBLFVBQUNBLEVBQU9BLEVBQUVBLEVBQU9BLEVBQUVBLEVBQU9BLEVBQUVBLEVBQU9BLEVBQUVBLEVBQU9BLEVBQUVBLEVBQU9BLEVBQUVBLEVBQU9BLEVBQUVBLEVBQU9BLEVBQUVBLEVBQU9BLEVBQy9FQSxHQUFRQSxFQUFFQSxHQUFRQSxFQUFFQSxHQUFRQSxFQUFFQSxHQUFRQSxFQUFFQSxHQUFRQSxFQUFFQSxHQUFRQTsyQkFDdkRBLElBQUlBLENBQUNBLENBQUNBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLENBQUNBO2dCQUF2RUEsQ0FBdUVBLENBQUNBO1lBQ3JGQSxLQUFLQSxFQUFFQTtnQkFDTEEsTUFBTUEsQ0FBQ0EsVUFBQ0EsRUFBT0EsRUFBRUEsRUFBT0EsRUFBRUEsRUFBT0EsRUFBRUEsRUFBT0EsRUFBRUEsRUFBT0EsRUFBRUEsRUFBT0EsRUFBRUEsRUFBT0EsRUFBRUEsRUFBT0EsRUFBRUEsRUFBT0EsRUFDL0VBLEdBQVFBLEVBQUVBLEdBQVFBLEVBQUVBLEdBQVFBLEVBQUVBLEdBQVFBLEVBQUVBLEdBQVFBLEVBQUVBLEdBQVFBLEVBQUVBLEdBQVFBOzJCQUNqRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0E7Z0JBQTVFQSxDQUE0RUEsQ0FBQ0E7WUFDMUZBLEtBQUtBLEVBQUVBO2dCQUNMQSxNQUFNQSxDQUFDQSxVQUFDQSxFQUFPQSxFQUFFQSxFQUFPQSxFQUFFQSxFQUFPQSxFQUFFQSxFQUFPQSxFQUFFQSxFQUFPQSxFQUFFQSxFQUFPQSxFQUFFQSxFQUFPQSxFQUFFQSxFQUFPQSxFQUFFQSxFQUFPQSxFQUMvRUEsR0FBUUEsRUFBRUEsR0FBUUEsRUFBRUEsR0FBUUEsRUFBRUEsR0FBUUEsRUFBRUEsR0FBUUEsRUFBRUEsR0FBUUEsRUFBRUEsR0FBUUEsRUFBRUEsR0FBUUE7MkJBQzNFQSxJQUFJQSxDQUFDQSxDQUFDQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUNyRUEsR0FBR0EsQ0FBQ0E7Z0JBRFZBLENBQ1VBLENBQUNBO1lBQ3hCQSxLQUFLQSxFQUFFQTtnQkFDTEEsTUFBTUEsQ0FBQ0EsVUFBQ0EsRUFBT0EsRUFBRUEsRUFBT0EsRUFBRUEsRUFBT0EsRUFBRUEsRUFBT0EsRUFBRUEsRUFBT0EsRUFBRUEsRUFBT0EsRUFBRUEsRUFBT0EsRUFBRUEsRUFBT0EsRUFBRUEsRUFBT0EsRUFDL0VBLEdBQVFBLEVBQUVBLEdBQVFBLEVBQUVBLEdBQVFBLEVBQUVBLEdBQVFBLEVBQUVBLEdBQVFBLEVBQUVBLEdBQVFBLEVBQUVBLEdBQVFBLEVBQUVBLEdBQVFBLEVBQzlFQSxHQUFRQTsyQkFBS0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsRUFDaEVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLENBQUNBO2dCQURwQkEsQ0FDb0JBLENBQUNBO1lBQzVDQSxLQUFLQSxFQUFFQTtnQkFDTEEsTUFBTUEsQ0FBQ0EsVUFBQ0EsRUFBT0EsRUFBRUEsRUFBT0EsRUFBRUEsRUFBT0EsRUFBRUEsRUFBT0EsRUFBRUEsRUFBT0EsRUFBRUEsRUFBT0EsRUFBRUEsRUFBT0EsRUFBRUEsRUFBT0EsRUFBRUEsRUFBT0EsRUFDL0VBLEdBQVFBLEVBQUVBLEdBQVFBLEVBQUVBLEdBQVFBLEVBQUVBLEdBQVFBLEVBQUVBLEdBQVFBLEVBQUVBLEdBQVFBLEVBQUVBLEdBQVFBLEVBQUVBLEdBQVFBLEVBQzlFQSxHQUFRQSxFQUFFQSxHQUFRQTsyQkFBS0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsR0FB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LElBQUlBLFFBQVFBLENBQUNBLEdBQUdBLEVBQUVBLFdBQVdBLEdBQUdBLElBQUlBLEdBQUdBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBRWhHVCx1Q0FBTUEsR0FBTkEsVUFBT0EsSUFBWUE7UUFDakJVLE1BQU1BLENBQVdBLElBQUlBLFFBQVFBLENBQUNBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLFdBQVdBLEdBQUdBLElBQUlBLEdBQUdBLE9BQU9BLENBQUNBLENBQUNBO0lBQ3hFQSxDQUFDQTtJQUVEVix1Q0FBTUEsR0FBTkEsVUFBT0EsSUFBWUE7UUFDakJXLElBQUlBLFlBQVlBLEdBQUdBLFlBQVVBLElBQUlBLDZCQUF1QkEsSUFBSUEsNkNBQzdDQSxJQUFJQSxxQkFBa0JBLENBQUNBO1FBQ3RDQSxNQUFNQSxDQUFXQSxJQUFJQSxRQUFRQSxDQUFDQSxHQUFHQSxFQUFFQSxNQUFNQSxFQUFFQSxZQUFZQSxDQUFDQSxDQUFDQTtJQUMzREEsQ0FBQ0E7SUFFRFgsa0dBQWtHQTtJQUNsR0EsMENBQVNBLEdBQVRBLFVBQVVBLElBQVVBLElBQVlZLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO0lBQ2hEWiw2QkFBQ0E7QUFBREEsQ0FBQ0EsQUFyTEQsSUFxTEM7QUFyTFksOEJBQXNCLHlCQXFMbEMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFR5cGUsXG4gIGlzUHJlc2VudCxcbiAgaXNGdW5jdGlvbixcbiAgZ2xvYmFsLFxuICBzdHJpbmdpZnksXG4gIENvbmNyZXRlVHlwZVxufSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtCYXNlRXhjZXB0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuaW1wb3J0IHtHZXR0ZXJGbiwgU2V0dGVyRm4sIE1ldGhvZEZufSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7UGxhdGZvcm1SZWZsZWN0aW9uQ2FwYWJpbGl0aWVzfSBmcm9tICcuL3BsYXRmb3JtX3JlZmxlY3Rpb25fY2FwYWJpbGl0aWVzJztcblxuZXhwb3J0IGNsYXNzIFJlZmxlY3Rpb25DYXBhYmlsaXRpZXMgaW1wbGVtZW50cyBQbGF0Zm9ybVJlZmxlY3Rpb25DYXBhYmlsaXRpZXMge1xuICBwcml2YXRlIF9yZWZsZWN0OiBhbnk7XG5cbiAgY29uc3RydWN0b3IocmVmbGVjdD86IGFueSkgeyB0aGlzLl9yZWZsZWN0ID0gaXNQcmVzZW50KHJlZmxlY3QpID8gcmVmbGVjdCA6IGdsb2JhbC5SZWZsZWN0OyB9XG5cbiAgaXNSZWZsZWN0aW9uRW5hYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cblxuICBmYWN0b3J5KHQ6IENvbmNyZXRlVHlwZSk6IEZ1bmN0aW9uIHtcbiAgICBzd2l0Y2ggKHQubGVuZ3RoKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHJldHVybiAoKSA9PiBuZXcgdCgpO1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gKGExOiBhbnkpID0+IG5ldyB0KGExKTtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIChhMTogYW55LCBhMjogYW55KSA9PiBuZXcgdChhMSwgYTIpO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gKGExOiBhbnksIGEyOiBhbnksIGEzOiBhbnkpID0+IG5ldyB0KGExLCBhMiwgYTMpO1xuICAgICAgY2FzZSA0OlxuICAgICAgICByZXR1cm4gKGExOiBhbnksIGEyOiBhbnksIGEzOiBhbnksIGE0OiBhbnkpID0+IG5ldyB0KGExLCBhMiwgYTMsIGE0KTtcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgcmV0dXJuIChhMTogYW55LCBhMjogYW55LCBhMzogYW55LCBhNDogYW55LCBhNTogYW55KSA9PiBuZXcgdChhMSwgYTIsIGEzLCBhNCwgYTUpO1xuICAgICAgY2FzZSA2OlxuICAgICAgICByZXR1cm4gKGExOiBhbnksIGEyOiBhbnksIGEzOiBhbnksIGE0OiBhbnksIGE1OiBhbnksIGE2OiBhbnkpID0+XG4gICAgICAgICAgICAgICAgICAgbmV3IHQoYTEsIGEyLCBhMywgYTQsIGE1LCBhNik7XG4gICAgICBjYXNlIDc6XG4gICAgICAgIHJldHVybiAoYTE6IGFueSwgYTI6IGFueSwgYTM6IGFueSwgYTQ6IGFueSwgYTU6IGFueSwgYTY6IGFueSwgYTc6IGFueSkgPT5cbiAgICAgICAgICAgICAgICAgICBuZXcgdChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNyk7XG4gICAgICBjYXNlIDg6XG4gICAgICAgIHJldHVybiAoYTE6IGFueSwgYTI6IGFueSwgYTM6IGFueSwgYTQ6IGFueSwgYTU6IGFueSwgYTY6IGFueSwgYTc6IGFueSwgYTg6IGFueSkgPT5cbiAgICAgICAgICAgICAgICAgICBuZXcgdChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgpO1xuICAgICAgY2FzZSA5OlxuICAgICAgICByZXR1cm4gKGExOiBhbnksIGEyOiBhbnksIGEzOiBhbnksIGE0OiBhbnksIGE1OiBhbnksIGE2OiBhbnksIGE3OiBhbnksIGE4OiBhbnksIGE5OiBhbnkpID0+XG4gICAgICAgICAgICAgICAgICAgbmV3IHQoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSk7XG4gICAgICBjYXNlIDEwOlxuICAgICAgICByZXR1cm4gKGExOiBhbnksIGEyOiBhbnksIGEzOiBhbnksIGE0OiBhbnksIGE1OiBhbnksIGE2OiBhbnksIGE3OiBhbnksIGE4OiBhbnksIGE5OiBhbnksXG4gICAgICAgICAgICAgICAgYTEwOiBhbnkpID0+IG5ldyB0KGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCwgYTksIGExMCk7XG4gICAgICBjYXNlIDExOlxuICAgICAgICByZXR1cm4gKGExOiBhbnksIGEyOiBhbnksIGEzOiBhbnksIGE0OiBhbnksIGE1OiBhbnksIGE2OiBhbnksIGE3OiBhbnksIGE4OiBhbnksIGE5OiBhbnksXG4gICAgICAgICAgICAgICAgYTEwOiBhbnksIGExMTogYW55KSA9PiBuZXcgdChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5LCBhMTAsIGExMSk7XG4gICAgICBjYXNlIDEyOlxuICAgICAgICByZXR1cm4gKGExOiBhbnksIGEyOiBhbnksIGEzOiBhbnksIGE0OiBhbnksIGE1OiBhbnksIGE2OiBhbnksIGE3OiBhbnksIGE4OiBhbnksIGE5OiBhbnksXG4gICAgICAgICAgICAgICAgYTEwOiBhbnksIGExMTogYW55LCBhMTI6IGFueSkgPT5cbiAgICAgICAgICAgICAgICAgICBuZXcgdChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5LCBhMTAsIGExMSwgYTEyKTtcbiAgICAgIGNhc2UgMTM6XG4gICAgICAgIHJldHVybiAoYTE6IGFueSwgYTI6IGFueSwgYTM6IGFueSwgYTQ6IGFueSwgYTU6IGFueSwgYTY6IGFueSwgYTc6IGFueSwgYTg6IGFueSwgYTk6IGFueSxcbiAgICAgICAgICAgICAgICBhMTA6IGFueSwgYTExOiBhbnksIGExMjogYW55LCBhMTM6IGFueSkgPT5cbiAgICAgICAgICAgICAgICAgICBuZXcgdChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5LCBhMTAsIGExMSwgYTEyLCBhMTMpO1xuICAgICAgY2FzZSAxNDpcbiAgICAgICAgcmV0dXJuIChhMTogYW55LCBhMjogYW55LCBhMzogYW55LCBhNDogYW55LCBhNTogYW55LCBhNjogYW55LCBhNzogYW55LCBhODogYW55LCBhOTogYW55LFxuICAgICAgICAgICAgICAgIGExMDogYW55LCBhMTE6IGFueSwgYTEyOiBhbnksIGExMzogYW55LCBhMTQ6IGFueSkgPT5cbiAgICAgICAgICAgICAgICAgICBuZXcgdChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5LCBhMTAsIGExMSwgYTEyLCBhMTMsIGExNCk7XG4gICAgICBjYXNlIDE1OlxuICAgICAgICByZXR1cm4gKGExOiBhbnksIGEyOiBhbnksIGEzOiBhbnksIGE0OiBhbnksIGE1OiBhbnksIGE2OiBhbnksIGE3OiBhbnksIGE4OiBhbnksIGE5OiBhbnksXG4gICAgICAgICAgICAgICAgYTEwOiBhbnksIGExMTogYW55LCBhMTI6IGFueSwgYTEzOiBhbnksIGExNDogYW55LCBhMTU6IGFueSkgPT5cbiAgICAgICAgICAgICAgICAgICBuZXcgdChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5LCBhMTAsIGExMSwgYTEyLCBhMTMsIGExNCwgYTE1KTtcbiAgICAgIGNhc2UgMTY6XG4gICAgICAgIHJldHVybiAoYTE6IGFueSwgYTI6IGFueSwgYTM6IGFueSwgYTQ6IGFueSwgYTU6IGFueSwgYTY6IGFueSwgYTc6IGFueSwgYTg6IGFueSwgYTk6IGFueSxcbiAgICAgICAgICAgICAgICBhMTA6IGFueSwgYTExOiBhbnksIGExMjogYW55LCBhMTM6IGFueSwgYTE0OiBhbnksIGExNTogYW55LCBhMTY6IGFueSkgPT5cbiAgICAgICAgICAgICAgICAgICBuZXcgdChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5LCBhMTAsIGExMSwgYTEyLCBhMTMsIGExNCwgYTE1LCBhMTYpO1xuICAgICAgY2FzZSAxNzpcbiAgICAgICAgcmV0dXJuIChhMTogYW55LCBhMjogYW55LCBhMzogYW55LCBhNDogYW55LCBhNTogYW55LCBhNjogYW55LCBhNzogYW55LCBhODogYW55LCBhOTogYW55LFxuICAgICAgICAgICAgICAgIGExMDogYW55LCBhMTE6IGFueSwgYTEyOiBhbnksIGExMzogYW55LCBhMTQ6IGFueSwgYTE1OiBhbnksIGExNjogYW55LCBhMTc6IGFueSkgPT5cbiAgICAgICAgICAgICAgICAgICBuZXcgdChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5LCBhMTAsIGExMSwgYTEyLCBhMTMsIGExNCwgYTE1LCBhMTYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgYTE3KTtcbiAgICAgIGNhc2UgMTg6XG4gICAgICAgIHJldHVybiAoYTE6IGFueSwgYTI6IGFueSwgYTM6IGFueSwgYTQ6IGFueSwgYTU6IGFueSwgYTY6IGFueSwgYTc6IGFueSwgYTg6IGFueSwgYTk6IGFueSxcbiAgICAgICAgICAgICAgICBhMTA6IGFueSwgYTExOiBhbnksIGExMjogYW55LCBhMTM6IGFueSwgYTE0OiBhbnksIGExNTogYW55LCBhMTY6IGFueSwgYTE3OiBhbnksXG4gICAgICAgICAgICAgICAgYTE4OiBhbnkpID0+IG5ldyB0KGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCwgYTksIGExMCwgYTExLCBhMTIsIGExMywgYTE0LCBhMTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGExNiwgYTE3LCBhMTgpO1xuICAgICAgY2FzZSAxOTpcbiAgICAgICAgcmV0dXJuIChhMTogYW55LCBhMjogYW55LCBhMzogYW55LCBhNDogYW55LCBhNTogYW55LCBhNjogYW55LCBhNzogYW55LCBhODogYW55LCBhOTogYW55LFxuICAgICAgICAgICAgICAgIGExMDogYW55LCBhMTE6IGFueSwgYTEyOiBhbnksIGExMzogYW55LCBhMTQ6IGFueSwgYTE1OiBhbnksIGExNjogYW55LCBhMTc6IGFueSxcbiAgICAgICAgICAgICAgICBhMTg6IGFueSwgYTE5OiBhbnkpID0+IG5ldyB0KGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCwgYTksIGExMCwgYTExLCBhMTIsIGExMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGExNCwgYTE1LCBhMTYsIGExNywgYTE4LCBhMTkpO1xuICAgICAgY2FzZSAyMDpcbiAgICAgICAgcmV0dXJuIChhMTogYW55LCBhMjogYW55LCBhMzogYW55LCBhNDogYW55LCBhNTogYW55LCBhNjogYW55LCBhNzogYW55LCBhODogYW55LCBhOTogYW55LFxuICAgICAgICAgICAgICAgIGExMDogYW55LCBhMTE6IGFueSwgYTEyOiBhbnksIGExMzogYW55LCBhMTQ6IGFueSwgYTE1OiBhbnksIGExNjogYW55LCBhMTc6IGFueSxcbiAgICAgICAgICAgICAgICBhMTg6IGFueSwgYTE5OiBhbnksIGEyMDogYW55KSA9PiBuZXcgdChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5LCBhMTAsIGExMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhMTIsIGExMywgYTE0LCBhMTUsIGExNiwgYTE3LCBhMTgsIGExOSwgYTIwKTtcbiAgICB9O1xuXG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgQ2Fubm90IGNyZWF0ZSBhIGZhY3RvcnkgZm9yICcke3N0cmluZ2lmeSh0KX0nIGJlY2F1c2UgaXRzIGNvbnN0cnVjdG9yIGhhcyBtb3JlIHRoYW4gMjAgYXJndW1lbnRzYCk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF96aXBUeXBlc0FuZEFubm90YXRpb25zKHBhcmFtVHlwZXMsIHBhcmFtQW5ub3RhdGlvbnMpOiBhbnlbXVtdIHtcbiAgICB2YXIgcmVzdWx0O1xuXG4gICAgaWYgKHR5cGVvZiBwYXJhbVR5cGVzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmVzdWx0ID0gbmV3IEFycmF5KHBhcmFtQW5ub3RhdGlvbnMubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gbmV3IEFycmF5KHBhcmFtVHlwZXMubGVuZ3RoKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gVFMgb3V0cHV0cyBPYmplY3QgZm9yIHBhcmFtZXRlcnMgd2l0aG91dCB0eXBlcywgd2hpbGUgVHJhY2V1ciBvbWl0c1xuICAgICAgLy8gdGhlIGFubm90YXRpb25zLiBGb3Igbm93IHdlIHByZXNlcnZlIHRoZSBUcmFjZXVyIGJlaGF2aW9yIHRvIGFpZFxuICAgICAgLy8gbWlncmF0aW9uLCBidXQgdGhpcyBjYW4gYmUgcmV2aXNpdGVkLlxuICAgICAgaWYgKHR5cGVvZiBwYXJhbVR5cGVzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXN1bHRbaV0gPSBbXTtcbiAgICAgIH0gZWxzZSBpZiAocGFyYW1UeXBlc1tpXSAhPSBPYmplY3QpIHtcbiAgICAgICAgcmVzdWx0W2ldID0gW3BhcmFtVHlwZXNbaV1dO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0W2ldID0gW107XG4gICAgICB9XG4gICAgICBpZiAoaXNQcmVzZW50KHBhcmFtQW5ub3RhdGlvbnMpICYmIGlzUHJlc2VudChwYXJhbUFubm90YXRpb25zW2ldKSkge1xuICAgICAgICByZXN1bHRbaV0gPSByZXN1bHRbaV0uY29uY2F0KHBhcmFtQW5ub3RhdGlvbnNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcGFyYW1ldGVycyh0eXBlT3JGdW5jOiBUeXBlKTogYW55W11bXSB7XG4gICAgLy8gUHJlZmVyIHRoZSBkaXJlY3QgQVBJLlxuICAgIGlmIChpc1ByZXNlbnQoKDxhbnk+dHlwZU9yRnVuYykucGFyYW1ldGVycykpIHtcbiAgICAgIHJldHVybiAoPGFueT50eXBlT3JGdW5jKS5wYXJhbWV0ZXJzO1xuICAgIH1cbiAgICBpZiAoaXNQcmVzZW50KHRoaXMuX3JlZmxlY3QpICYmIGlzUHJlc2VudCh0aGlzLl9yZWZsZWN0LmdldE1ldGFkYXRhKSkge1xuICAgICAgdmFyIHBhcmFtQW5ub3RhdGlvbnMgPSB0aGlzLl9yZWZsZWN0LmdldE1ldGFkYXRhKCdwYXJhbWV0ZXJzJywgdHlwZU9yRnVuYyk7XG4gICAgICB2YXIgcGFyYW1UeXBlcyA9IHRoaXMuX3JlZmxlY3QuZ2V0TWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgdHlwZU9yRnVuYyk7XG4gICAgICBpZiAoaXNQcmVzZW50KHBhcmFtVHlwZXMpIHx8IGlzUHJlc2VudChwYXJhbUFubm90YXRpb25zKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5femlwVHlwZXNBbmRBbm5vdGF0aW9ucyhwYXJhbVR5cGVzLCBwYXJhbUFubm90YXRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gVGhlIGFycmF5IGhhcyB0byBiZSBmaWxsZWQgd2l0aCBgdW5kZWZpbmVkYCBiZWNhdXNlIGhvbGVzIHdvdWxkIGJlIHNraXBwZWQgYnkgYHNvbWVgXG4gICAgbGV0IHBhcmFtZXRlcnMgPSBuZXcgQXJyYXkoKDxhbnk+dHlwZU9yRnVuYy5sZW5ndGgpKTtcbiAgICBwYXJhbWV0ZXJzLmZpbGwodW5kZWZpbmVkKTtcbiAgICByZXR1cm4gcGFyYW1ldGVycztcbiAgfVxuXG4gIGFubm90YXRpb25zKHR5cGVPckZ1bmM6IFR5cGUpOiBhbnlbXSB7XG4gICAgLy8gUHJlZmVyIHRoZSBkaXJlY3QgQVBJLlxuICAgIGlmIChpc1ByZXNlbnQoKDxhbnk+dHlwZU9yRnVuYykuYW5ub3RhdGlvbnMpKSB7XG4gICAgICB2YXIgYW5ub3RhdGlvbnMgPSAoPGFueT50eXBlT3JGdW5jKS5hbm5vdGF0aW9ucztcbiAgICAgIGlmIChpc0Z1bmN0aW9uKGFubm90YXRpb25zKSAmJiBhbm5vdGF0aW9ucy5hbm5vdGF0aW9ucykge1xuICAgICAgICBhbm5vdGF0aW9ucyA9IGFubm90YXRpb25zLmFubm90YXRpb25zO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFubm90YXRpb25zO1xuICAgIH1cbiAgICBpZiAoaXNQcmVzZW50KHRoaXMuX3JlZmxlY3QpICYmIGlzUHJlc2VudCh0aGlzLl9yZWZsZWN0LmdldE1ldGFkYXRhKSkge1xuICAgICAgdmFyIGFubm90YXRpb25zID0gdGhpcy5fcmVmbGVjdC5nZXRNZXRhZGF0YSgnYW5ub3RhdGlvbnMnLCB0eXBlT3JGdW5jKTtcbiAgICAgIGlmIChpc1ByZXNlbnQoYW5ub3RhdGlvbnMpKSByZXR1cm4gYW5ub3RhdGlvbnM7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHByb3BNZXRhZGF0YSh0eXBlT3JGdW5jOiBhbnkpOiB7W2tleTogc3RyaW5nXTogYW55W119IHtcbiAgICAvLyBQcmVmZXIgdGhlIGRpcmVjdCBBUEkuXG4gICAgaWYgKGlzUHJlc2VudCgoPGFueT50eXBlT3JGdW5jKS5wcm9wTWV0YWRhdGEpKSB7XG4gICAgICB2YXIgcHJvcE1ldGFkYXRhID0gKDxhbnk+dHlwZU9yRnVuYykucHJvcE1ldGFkYXRhO1xuICAgICAgaWYgKGlzRnVuY3Rpb24ocHJvcE1ldGFkYXRhKSAmJiBwcm9wTWV0YWRhdGEucHJvcE1ldGFkYXRhKSB7XG4gICAgICAgIHByb3BNZXRhZGF0YSA9IHByb3BNZXRhZGF0YS5wcm9wTWV0YWRhdGE7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvcE1ldGFkYXRhO1xuICAgIH1cbiAgICBpZiAoaXNQcmVzZW50KHRoaXMuX3JlZmxlY3QpICYmIGlzUHJlc2VudCh0aGlzLl9yZWZsZWN0LmdldE1ldGFkYXRhKSkge1xuICAgICAgdmFyIHByb3BNZXRhZGF0YSA9IHRoaXMuX3JlZmxlY3QuZ2V0TWV0YWRhdGEoJ3Byb3BNZXRhZGF0YScsIHR5cGVPckZ1bmMpO1xuICAgICAgaWYgKGlzUHJlc2VudChwcm9wTWV0YWRhdGEpKSByZXR1cm4gcHJvcE1ldGFkYXRhO1xuICAgIH1cbiAgICByZXR1cm4ge307XG4gIH1cblxuICBpbnRlcmZhY2VzKHR5cGU6IFR5cGUpOiBhbnlbXSB7XG4gICAgdGhyb3cgbmV3IEJhc2VFeGNlcHRpb24oXCJKYXZhU2NyaXB0IGRvZXMgbm90IHN1cHBvcnQgaW50ZXJmYWNlc1wiKTtcbiAgfVxuXG4gIGdldHRlcihuYW1lOiBzdHJpbmcpOiBHZXR0ZXJGbiB7IHJldHVybiA8R2V0dGVyRm4+bmV3IEZ1bmN0aW9uKCdvJywgJ3JldHVybiBvLicgKyBuYW1lICsgJzsnKTsgfVxuXG4gIHNldHRlcihuYW1lOiBzdHJpbmcpOiBTZXR0ZXJGbiB7XG4gICAgcmV0dXJuIDxTZXR0ZXJGbj5uZXcgRnVuY3Rpb24oJ28nLCAndicsICdyZXR1cm4gby4nICsgbmFtZSArICcgPSB2OycpO1xuICB9XG5cbiAgbWV0aG9kKG5hbWU6IHN0cmluZyk6IE1ldGhvZEZuIHtcbiAgICBsZXQgZnVuY3Rpb25Cb2R5ID0gYGlmICghby4ke25hbWV9KSB0aHJvdyBuZXcgRXJyb3IoJ1wiJHtuYW1lfVwiIGlzIHVuZGVmaW5lZCcpO1xuICAgICAgICByZXR1cm4gby4ke25hbWV9LmFwcGx5KG8sIGFyZ3MpO2A7XG4gICAgcmV0dXJuIDxNZXRob2RGbj5uZXcgRnVuY3Rpb24oJ28nLCAnYXJncycsIGZ1bmN0aW9uQm9keSk7XG4gIH1cblxuICAvLyBUaGVyZSBpcyBub3QgYSBjb25jZXB0IG9mIGltcG9ydCB1cmkgaW4gSnMsIGJ1dCB0aGlzIGlzIHVzZWZ1bCBpbiBkZXZlbG9waW5nIERhcnQgYXBwbGljYXRpb25zLlxuICBpbXBvcnRVcmkodHlwZTogVHlwZSk6IHN0cmluZyB7IHJldHVybiAnLi8nOyB9XG59XG4iXX0=