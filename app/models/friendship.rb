class Friendship < ApplicationRecord
	belongs_to :user
	# belong to friend and the friend is class user
	belongs_to :friend, :class_name => 'User'
end
