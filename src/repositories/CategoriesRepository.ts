import { EntityRepository, Repository } from 'typeorm';

import Category from '../models/Category';

interface Request {
  title: string;
}
@EntityRepository(Category)
class CategoriesRepository extends Repository<Category> {
  public async getCategoryId({ title }: Request): Promise<Category | null> {
    const category = await this.findOne({
      where: { title },
    });
    return category || null;
  }
}
export default CategoriesRepository;
