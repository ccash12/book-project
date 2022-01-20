class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :address, :email, :password_digest
end
