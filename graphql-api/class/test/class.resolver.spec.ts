import { Test, TestingModule } from '@nestjs/testing';
import { ClassResolver } from '../src/class/class.resolver';
import { ClassService } from '../src/class/class.service';

describe('ClassResolver', () => {
  let resolver: ClassResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClassResolver, ClassService],
    }).compile();

    resolver = module.get<ClassResolver>(ClassResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
