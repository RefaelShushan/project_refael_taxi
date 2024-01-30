import { Test, TestingModule } from '@nestjs/testing';
import { TravelService } from './travel.service';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { Travel, TravelSchema } from './travel.schema';
import { Model, Query } from 'mongoose';

// describe('TravelService', () => {
//   let service: TravelService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       imports:[MongooseModule.forFeature([{ name: Travel.name, schema: TravelSchema }]),MongooseModule.forRoot('mongodb://localhost:27017/dbTravel')],
//       providers: [TravelService],
//     }).compile();

//     service = module.get<TravelService>(TravelService);
//   });

//   // it('should be defined', () => {
//   //   expect(service).toStrictEqual("");
//   // });
//   describe('findAll', () => {
//     it('should return an array of cats', async () => {
//       const result = ['test'];
//       // jest.spyOn(catsService, 'findAll').mockImplementation(() => result);

//       expect(await service.findAll()).toBe('');
//     })
// })
// });

describe('TravelService', () => {
  let service: TravelService;
  let repo: Model<Travel>;
  let travelMoke: Travel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TravelService,
        {
          provide: getModelToken("Travel"),
          useValue: Model
        },
      ],
    }).compile();

    service = module.get<TravelService>(TravelService);
    repo = module.get<Model<Travel>>(getModelToken("Travel"));

    travelMoke = new Travel();

    (travelMoke.id = 'd8d523ca-e664-4b15-b4f0-f3817b045335'),
      (travelMoke.name = 'shay'),
      (travelMoke.arrival_address = 'shay@gmail.com'),
      (travelMoke.port_address = 'asdA1!AS243'),
      (travelMoke.amount = 25),
      (travelMoke.cellphone_number = '0558987456'),
      (travelMoke.date = '16.7.24');

    repo.find = jest.fn().mockResolvedValue([travelMoke]);
    repo.findById = jest.fn().mockResolvedValue(travelMoke);
    repo.create = jest.fn().mockResolvedValue(travelMoke)
  });

  it('should return an array of users', async () => {
    const travel = await service.findAll();

    expect(travel).toEqual([travelMoke]);
    expect(Array.isArray(travel)).toBe(true);
    expect(travel[0]).toBeInstanceOf(Travel);


  });

  it('should return a single user by ID', async () => {
    const travelId = await service.findOne('d8d523ca-e664-4b15-b4f0-f3817b045335');

    expect(travelId).toEqual(travelMoke);
    expect(travelId).toBeInstanceOf(Travel);
  });

  // it('should return a single user by ID', async () => {
  //   const travelId = await service.create(travelMoke);

  //   expect(travelId).toEqual(travelMoke);
  //   expect(travelId).toBeInstanceOf(Travel);
  // });
});



