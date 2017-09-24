source 'http://rubygems.org'
ruby '2.2.7'

#core
gem 'rails', '4.2.0'
gem 'haml'
gem 'react-rails'

#UI/UX
gem 'bootstrap_form'
gem 'bootstrap-sass', '~> 3.3.6'
gem 'bootswatch-rails'
gem 'font-awesome-rails'
gem 'jquery-rails'
gem 'sass-rails'
gem 'turbolinks'

#back-end
gem 'bcrypt'
gem 'faker'
gem 'fabrication'
gem 'sqlite3'
gem 'sidekiq', '4.2.10'
gem 'uglifier'

group :development do
  gem "awesome_print"
  gem 'foreman'
  gem 'letter_opener'
  gem 'thin'
  gem 'spring' #dev reload
  gem 'guard'
  gem "rack-livereload"
  gem 'guard-livereload'
end

group :development, :test do
  gem 'pry'
  gem 'pry-nav'
  gem 'rspec-rails'
end

group :test do
  gem 'capybara'
  gem 'capybara-email'
  gem 'chromedriver-helper'
  gem 'database_cleaner', '1.4.1'
  gem 'launchy'
  gem 'selenium-webdriver'
  gem 'shoulda-matchers', '2.7.0'
  gem 'vcr', '3.0.3'
  gem 'webmock'
  gem 'capybara-webkit'
end

group :development, :production do
  gem 'puma'
end

group :production do
  gem 'carrierwave-aws'
  gem 'rails_12factor'
end