class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :summary
      t.integer :review_id

      t.timestamps
    end
  end
end
