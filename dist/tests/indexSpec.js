"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const __1 = __importDefault(require(".."));
const sharp_1 = __importDefault(require("sharp"));
const request = (0, supertest_1.default)(__1.default);
describe('this is a test suit for endpoint responses', () => {
    it("this is a test for the main '/' root api", () => __awaiter(void 0, void 0, void 0, function* () {
        const responses = yield request.get('/');
        expect(responses.status).toBe(200);
    }));
    it("this is a test for the get for '/api/images/:picName/:h/:w' for image processing", () => __awaiter(void 0, void 0, void 0, function* () {
        const responses = yield request.get('/api/images/fjord/200/200');
        expect(responses.status).toBe(200);
    }));
    it('this is a test for the get for any missing endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const responses = yield request.get('/api/images');
        expect(responses.status).toBe(200);
    }));
});
describe('this is a test for the functionality of the application', () => {
    it("this is a test for the image process function", () => __awaiter(void 0, void 0, void 0, function* () {
        const imageProcess = (picName, h, w) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, sharp_1.default)(`images/${picName}.jpg`)
                .resize({
                width: w,
                height: h,
            })
                .toFile(`images/${picName}_${h}_${w}.jpg`);
        });
        const result = imageProcess("fjord", 200, 200);
        expect(result).toBeResolved;
    }));
});
